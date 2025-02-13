// @ts-check
import { defineConfig } from "astro/config";

import * as path from "path";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: "https://astropie.netlify.app",
  base: "/",
  integrations: [
    tailwind(),
    alpinejs(),
    mdx(),
    (await import("@playform/inline")).default({
      Critters: true,
    }),
  ],
  output: "static", // Remove this line or change it to "server" if needed
  outDir: "dist", // Add this line to specify the output directory
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
