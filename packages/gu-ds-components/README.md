# Component library

Components can be used as react components or as web components.<br />
TypeScript definitions are included.


```jsx
import Example from "gu-ds-components/react/example";
<Example message="Hello" />
```

```html
<script>import Example from "gu-ds-components/web-component/example";</script>
<gu-ds-example message="Hello" />
```

```JavaScript
import Example from "gu-ds-components/web-component/example";
const example = new Example();
example.message = "Hello"
document.body.appendChild(example);
```