# Base

## 🛠️ Usage

"namespace" will be replaced when the design system has been given a name.

Design tokens can be imported as json, css variables or sass variables:

```JavaScript
import theme from "~gu-ds-base/themes/magazine/tokens.json";

export const Button = styled.button`
    background-color: ${theme.component.button.color.background};
`;
```

```css
@import "~gu-ds-base/themes/magazine/tokens.css";

.button {
    background-color: var(--namespace-component-button-color-background);
}
```

```scss
@use "~gu-ds-tokens/themes/magazine/tokens.scss" as tokens;

.button {
    background-color: tokens.$component-button-color-background;
}
```

Typography can be applied directly to HTML using CSS classes or by using `composes` in css modules:

```html
<style>@import "~gu-ds-base/themes/magazine/typography.css";</style>

<h1 class="namespace-magazine-headingXxl">Heading</h1>
```

```css
.my-heading {
  composes: headingXxl from "~gu-ds-base/themes/magazine/typography.module.css";
}
```

Also see the typography component from gu-ds-components:

```tsx
import { ThemeProvider, Typography } from "~gu-ds-components/react";

<ThemeProvider variant="magazine">
    <Typography component="h1" variant="headingXxl" />
</TheThemeProviderme>
```


## ⚡ Quick how to: update tokens

1. In Figma, make sure "reference mode in variables" is enabled for the design tokens plugin
2. Export json from Figma
3. Replace json in `tokens-from-figma.json`
4. Run `yarn build`
5. Commit changes

## 🧱 Token folder structure

```
/
├── themes/
│   ├── tokens.css
│   ├── tokens.scss
│   └── token.json
├── build-tokens.ts
├── config.ts
└── tokens-from-figma.json
```

We use [style-dictionary](https://github.com/amzn/style-dictionary) to transform and format the tokens in `./tokens-from-figma.json`.

In `./config.ts` we decide which formats we want (css, scss, js and more), and in `./build-tokens.ts` we can create formatters and use other utilities to change the output how we want.

The files in `./themes` are auto generated and should never be edited manually.
