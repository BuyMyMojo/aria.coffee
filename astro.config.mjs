// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: process.env.DOCKER_BUILD ? 'server' : 'static',
  site: "https://aria.coffee",
  integrations: [preact(), tailwind(), icon(), mdx()],

  image: {
    domains: ["buymymojo.net", "aria.coffee", "github.com", "githubusercontent.com", "avatars.githubusercontent.com", "camo.githubusercontent.com", "user-images.githubusercontent.com", "private-user-images.githubusercontent.com"],
  },

  adapter: node({
    mode: "standalone",
  }),
});