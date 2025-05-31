// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://hidrovalsas.com",

  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  devToolbar: {
    enabled: false,
  },

  compressHTML: true,

  build: {
    inlineStylesheets: "auto",
  },

  adapter: netlify(),
});