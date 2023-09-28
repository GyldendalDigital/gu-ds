import r2wc from "@r2wc/react-to-web-component";
import { ProficiencyBar, Props, propNames } from "./ProficiencyBar";

const component = r2wc<Props>(ProficiencyBar, {
  props: propNames,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & Props;
};

window.customElements.define("gu-ds-proficiency-bar", component);

export default component;
