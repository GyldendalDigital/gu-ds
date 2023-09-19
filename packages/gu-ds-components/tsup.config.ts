import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: [
    "src/register-web-components.ts",
    "src/**/react.ts",
    "src/**/web-component.ts",
  ],
  dts: true,
  outDir: "dist",
  format: ["esm"],
  name: "gu-ds-components",
  splitting: false,
  outExtension() {
    return {
      js: `.js`,
    };
  },
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as "es2016",
  minify: false,
}));
