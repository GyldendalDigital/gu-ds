module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "turbo",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  globals: {
    JSX: true,
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "storybook"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs", "**/*.css", "**/*.scss"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    quotes: ["error", "double", "avoid-escape"],
    "no-case-declarations": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-a11y/no-autofocus": "off",
    "storybook/no-redundant-story-name": "off",
    "react/no-unescaped-entities": 0,
  },
};
