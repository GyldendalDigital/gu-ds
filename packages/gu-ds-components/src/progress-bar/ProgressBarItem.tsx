import type { CSSProperties, FunctionComponent } from "react";
import React from "react";
import classNames from "./progressBarItem.module.css";

type AriaProps =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-label"?: never; "aria-labelledby": string };

export type ProgressBarType = AriaProps & {
  explainOtherUnitThanPercentage?: string;
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  fillColorVar?: string;
  filledColorVar?: string;
};

interface ProgressBarItemProps {
  className?: string;
  fillerWidth: number;
  progressBar: ProgressBarType;
}

/**
 *
 * @param progressBar - Progressbar object, in which valueNow is the only mandatory property.
 * @returns Progress bar fill/foreground.
 */
export const ProgressBarItem: FunctionComponent<ProgressBarItemProps> = ({
  className = "",
  fillerWidth,
  progressBar,
}) => {
  const valueMin = progressBar.valueMin || 0;
  const valueMax = progressBar.valueMax || 100;

  return (
    <li
      className={`${classNames.item} ${className}`}
      style={
        {
          "--progress-bar-item-width": `${fillerWidth}`,
        } as CSSProperties
      }
    >
      <div
        aria-label={progressBar["aria-label"]}
        aria-labelledby={progressBar["aria-labelledby"]}
        aria-valuemax={valueMax}
        aria-valuemin={valueMin}
        aria-valuenow={progressBar.valueNow}
        aria-valuetext={progressBar.explainOtherUnitThanPercentage}
        className={classNames.fill}
        role="progressbar"
        style={
          {
            "--progress-bar-fill-color":
              progressBar.valueNow === valueMax && Boolean(progressBar.filledColorVar)
                ? `var(${progressBar.filledColorVar})`
                : progressBar.fillColorVar
                ? `var(${progressBar.fillColorVar})`
                : "var(--component-progressbar-color-fg-default)",
          } as CSSProperties
        }
      />
    </li>
  );
};
