import r2wc from "@r2wc/react-to-web-component";
import {
  ProgressBar as ReactProgressBar,
  Props as ProgressBarProps,
  propNames as progressBarPropName,
} from "./ProgressBar";
import {
  ProficiencyBar as ReactProficiencyBar,
  Props as ProficiencyBarProps,
  propNames as proficiencyBarPropName,
} from "./ProficiencyBar";

const ProgressBar = r2wc<ProgressBarProps>(ReactProgressBar, {
  props: progressBarPropName,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & ProgressBarProps;
};

const ProficiencyBar = r2wc<ProficiencyBarProps>(ReactProficiencyBar, {
  props: proficiencyBarPropName,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & ProficiencyBarProps;
};

window.customElements.define("gu-ds-progress-bar", ProgressBar);

window.customElements.define("gu-ds-proficiency-bar", ProficiencyBar);

export { ProgressBar, ProficiencyBar };
