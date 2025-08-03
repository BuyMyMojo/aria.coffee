// @ts-check
import { defineConfig } from "astro/config";
import matomo from 'astro-matomo';
import { remarkModifiedTime } from "./remark-modified-time.mjs";

import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import tailwind from "@tailwindcss/vite";
// import node from "@astrojs/node";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: process.env.DOCKER_BUILD ? "server" : "static",
  site: "https://aria.coffee",
  integrations: [
    preact(),
    // tailwind(),
    icon(),
    mdx(),
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: "https://analytics.aria.coffee/",
      // setCookieDomain: "*.ara.coffee",
      // trackerUrl: "js/", // defaults to matomo.php
      // srcUrl: "js/", // defaults to matomo.js
      siteId: 1,
      heartBeatTimer: 5,
      // disableCookies: true,
      debug: false,
      // viewTransition: {
        // contentElement: "main"
      // }
    }),

  ],

  image: {
      domains: [
          "buymymojo.net",
          "aria.coffee",
          "github.com",
          "githubusercontent.com",
          "avatars.githubusercontent.com",
          "camo.githubusercontent.com",
          "user-images.githubusercontent.com",
          "private-user-images.githubusercontent.com",
      ],
  },

  markdown: {
      remarkPlugins: [remarkModifiedTime],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

// Bellow is for when dedicated server is wanted?

// ,
//
//   adapter: node({
//     mode: "standalone",
//   })