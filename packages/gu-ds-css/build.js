const fs = require("fs");
const tokens = require("gu-ds-tokens/output/tokens.json");
const tokensToCssClasses = require("./src/tokens-to-css-classes.js");

const css = tokensToCssClasses(tokens.typography);

fs.writeFileSync("output/typography.css", css);
