import r2wc from "@r2wc/react-to-web-component";
import { Example, propNames } from "./example/Example";

window.customElements.define(
  "gu-ds-example",
  r2wc(Example, { props: propNames })
);
