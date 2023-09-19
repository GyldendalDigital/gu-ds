import fs from "fs";
import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

// Generate entries in the following format:
//
// {
//   'example/react': 'src/example/react.ts',
//   'example/web-component': 'src/example/web-component.ts'
// }

const componentNames = fs.readdirSync("src");
const entries: Record<string, string> = {};
componentNames.forEach((componentName) => {
  const directory = `src/${componentName}`;
  const stats = fs.statSync(directory);
  if (stats.isDirectory()) {
    entries[`${componentName}/react`] = `${directory}/react.ts`;
    entries[`${componentName}/web-component`] = `${directory}/web-component.ts`;
  }
});

export default defineConfig((options) => ({
  entry: entries,
  dts: true,
  outDir: "dist",
  format: ["esm"],
  name: "gu-ds-components",
  splitting: false,
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as "es2016",
  minify: false,
}));
