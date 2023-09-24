import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte()],
  output: "server",
  adapter: netlify(),
  vite: {
    ssr: { noExternal: ["solid-use"] },
    plugins: [vanillaExtractPlugin()],
  },
});
