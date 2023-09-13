import { getValueAndUnit } from "polished";

export const rootScale = (value: string | number) => {
  return `calc(var(--root-scale) * ${getNumericRem(value)})`;
};

export const rootScaleNoCalc = (value: string | number) => {
  return `(var(--root-scale) * ${getNumericRem(value)})`;
};

export const rootScaleIfNumber = (value: string | number | undefined) => {
  return typeof value === "number" ? rootScale(value) : value;
};

const getNumericRem = (value: string | number) => {
  if (typeof value === "string") {
    const [string, unit] = getValueAndUnit(value);
    if (unit === "px") {
      return Number(string) / 16;
    }
    if (unit === "rem") {
      return Number(string);
    }
    throw new Error(`${unit} is not a valid unit`);
  }
  return value / 16;
};

let div: undefined | HTMLDivElement;

if (typeof document !== "undefined") {
  div = document.createElement("div");
  document.body.appendChild(div);
}

const getCalculatedRootScaleValue = (value: string | number) => {
  if (div) {
    div.style.marginLeft = rootScale(value);
    div.style.position = "absolute";
    return window.getComputedStyle(div).marginLeft;
  }
  return "0";
};

export const getCalculatedRootScaleNumber = (value: string | number) => {
  const cssString = getCalculatedRootScaleValue(value);
  return Number(cssString.replace("px", ""));
};
