// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://aria.coffee",
  integrations: [preact(), tailwind(), icon()],
  image: {
    domains: ["buymymojo.net", "aria.coffee", "github.com", "githubusercontent.com", "avatars.githubusercontent.com", "camo.githubusercontent.com", "user-images.githubusercontent.com", "private-user-images.githubusercontent.com"],
  },
});