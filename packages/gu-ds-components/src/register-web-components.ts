import r2wc from "@r2wc/react-to-web-component";
import { Example, propNames } from "./components/example/Example";

const registerWebComponents = () => {
  window.customElements.define(
    "gu-ds-example",
    r2wc(Example, { props: propNames, shadow: "open" })
  );
};

export default registerWebComponents;
