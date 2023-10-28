import r2wc from "@r2wc/react-to-web-component";
import type { ExampleProps } from "./Example";
import { Example as ReactExample, propNames } from "./Example";

const Example = r2wc<ExampleProps>(ReactExample, {
  props: propNames,
  shadow: "open",
}) as new (...params: any[]) => HTMLElement & ExampleProps;

window.customElements.define("gu-ds-example", Example);

export { Example };
