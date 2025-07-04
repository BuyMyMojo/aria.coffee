// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// Import the glob loader
import { glob } from "astro/loaders";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
		draft: z.boolean().optional().default(false),
	}),
});

const albums = defineCollection({
	type: "data",
	schema: ({ image }) =>
	  z.object({
		title: z.string(),
		description: z.string().optional(),
		cover: image(),
	  }),
  });

// Export a single `collections` object to register your collection(s)
export const collections = { blog, albums };
