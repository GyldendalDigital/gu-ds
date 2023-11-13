import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte()],
  output: "server",
  adapter: netlify(),
  vite: {
    ssr: { noExternal: ["solid-use", "react-icons", "gu-ds-base"] },
    plugins: [vanillaExtractPlugin()],
  },
});
