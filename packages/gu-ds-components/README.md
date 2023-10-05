# Component library

Components can be used as react components or as web components.<br />
TypeScript definitions are included.

## Installation

Run one of the following commands to add gu-ds-components to your project:


```
npm install gu-ds-components
```

```
yarn add gu-ds-components
```

You will also need to install 
[react](https://www.npmjs.com/package/react) and
[react-dom](https://www.npmjs.com/package/react-dom)

## Inter font

The Inter variable font is used by default.
It can be installed separately from [fontsource](https://fontsource.org/fonts/inter/) with one of these commands:


```
npm install @fontsource-variable/inter
```

```
yarn add @fontsource-variable/inter
```

And then imported in your project:

```JavaScript
import '@fontsource-variable/inter';
```

## Usage

Components can be imported as react components or as web components.

As a react component:

```jsx
import { ProgressBar } from "gu-ds-components/react/progress-bar";
const App = () => <ProgressBar />;
```

As a custom element:

```html
<script>import "gu-ds-components/web-component/progress-bar";</script>
<gu-ds-progress-bar />
```

As a web component:

```JavaScript
import { ProgressBar } from "gu-ds-components/web-component/progress-bar";
const progressBar = new ProgressBar();
document.body.appendChild(progressBar);
```

## CSS

CSS for individual components can be imported from **gu-ds-components/css**:

```JavaScript
import "gu-ds-components/css/progress-bar";
```

Alternatively, all CSS can be imported in one go:

```JavaScript
import "gu-ds-components/css";
```

<mark>
Kanskje vi bør inkludere vår egen css baseline i stedet for dette? ↓
<br />
Slik som https://mui.com/material-ui/react-css-baseline/</mark>

gu-ds-components assumes that `box-sizing` is set to `border-box`:

```css
html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }
```

We recommend using [normalize.css](https://github.com/necolas/normalize.css/) or something similar to normalize browser styles.



