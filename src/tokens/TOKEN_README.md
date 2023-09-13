# Design tokens

## ⚡ Quick how to: update tokens

1. Export from Figma
2. Replace the content in `./tokens-from-figma.json` with the exported json
3. Run `yarn tokens`
4. Commit changes

## 🧱 Token folder structure

```
/
├── output/
│   ├── tokens.css
│   ├── tokens.less
│   ├── tokens.scss
│   ├── tokens.js
│   └── token.json
├── build.cjs
├── config.cjs
└── tokens-from-figma.json
```

We use [style-dictionary](https://github.com/amzn/style-dictionary) to generate tokens from `./tokens-from-figma.json`. 

In `./config.cjs` we decide which formats we want (css, scss, js and more), and in `./build.cjs` we can create formatters and use other utilities to change the output how we want.

The files in `./output` are auto generated and should never be edited manually.