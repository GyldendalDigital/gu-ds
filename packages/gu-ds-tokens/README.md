# Design tokens

## ⚡ Quick how to: update tokens

1. Export json from Figma
2. Replace json in `tokens-from-figma.json`
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
├── build.js
├── config.js
└── tokens-from-figma.json
```

We use [style-dictionary](https://github.com/amzn/style-dictionary) to transform and format the tokens in `./tokens-from-figma.json`.

In `./config.js` we decide which formats we want (css, scss, js and more), and in `./build.js` we can create formatters and use other utilities to change the output how we want.

The files in `./output` are auto generated and should never be edited manually.
