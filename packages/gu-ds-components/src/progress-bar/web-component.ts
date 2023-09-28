import r2wc from "@r2wc/react-to-web-component";
import { ProgressBar, Props, propNames } from "./ProgressBar";

const component = r2wc<Props>(ProgressBar, {
  props: propNames,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & Props;
};

window.customElements.define("gu-ds-progress-bar", component);

export default component;
