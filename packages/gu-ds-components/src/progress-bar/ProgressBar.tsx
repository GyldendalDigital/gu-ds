import React, { CSSProperties, FunctionComponent } from "react";
import {
  Fill,
  ProgressBarItem,
  ProgressBarsList,
  StyledProgressBarProps,
} from "./ProgressBar.styles";

type ProgressBar = {
  valueText: string;
  valueNow: number;
  valueMax?: number;
  fillColor: string;
  filledColor?: string;
  labelledby?: string;
};

interface Props extends StyledProgressBarProps {
  className?: string;
  progressBars: ProgressBar[];
}

export const ProgressBar: FunctionComponent<React.PropsWithChildren<Props>> = ({
  className,
  barBackground,
  progressBars,
}) => (
  <ProgressBarsList className={className} barBackground={barBackground}>
    {progressBars?.map((progressBar, index) => {
      const valueMax = progressBar.valueMax || 100;

      return (
        <ProgressBarItem
          style={{ "--value-now": `${progressBar.valueNow}` } as CSSProperties}
          key={index}
        >
          {progressBar.valueNow === valueMax && progressBar.filledColor ? (
            <Fill
              role="progressbar"
              aria-valuenow={progressBar.valueNow}
              aria-valuemin={0}
              aria-labelledby={progressBar.labelledby}
              aria-valuetext={progressBar.valueText}
              aria-valuemax={valueMax}
            />
          ) : (
            <Fill
              role="progressbar"
              aria-valuenow={progressBar.valueNow}
              aria-valuemin={0}
              aria-labelledby={progressBar.labelledby}
              aria-valuetext={progressBar.valueText}
              aria-valuemax={valueMax}
            />
          )}
        </ProgressBarItem>
      );
    })}
  </ProgressBarsList>
);
