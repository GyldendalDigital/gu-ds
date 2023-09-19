import r2wc from "@r2wc/react-to-web-component";
import { Example, ExampleProps, propNames } from "./Example";

const component = r2wc<ExampleProps>(Example, {
  props: propNames,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & ExampleProps;
};

window.customElements.define("gu-ds-example", component);

export default component;
