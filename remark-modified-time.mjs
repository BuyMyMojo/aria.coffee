import { execSync } from "node:child_process";

export function remarkModifiedTime() {
  return (tree, file) => {
    const filepath = file.history[0];
    const result = typeof import.meta.env.PUBLIC_COMMIT === "undefined" ? "Unavailable" : execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = result.toString();
  };
}