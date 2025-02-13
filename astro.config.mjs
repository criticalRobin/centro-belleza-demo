// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://astropie.netlify.app",
  base: "/",
  // trailingSlash: 'always',
  integrations: [
    tailwind(),
    alpinejs(),
    mdx(),
    (await import("@playform/inline")).default({
      Critters: true,
    }),
  ],
  output: "static", // Remove this line or change it to "server" if needed
  outDir: "dist",
  devToolbar: {
    enabled: false,
  },
});
