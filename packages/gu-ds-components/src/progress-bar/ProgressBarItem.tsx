import React, { CSSProperties, FunctionComponent } from "react";
import "./progressBarItem.css";

type AriaProps =
    | { "aria-label": string; "aria-labelledby"?: never; }
    | { "aria-label"?: never; "aria-labelledby": string; };

export type ProgressBarType = AriaProps & {
    explainOtherUnitThanPercentage?: string;
    valueNow: number;
    valueMin?: number;
    valueMax?: number;
    fillColor?: string;
    filledColor?: string;
};

interface ProgressBarItemProps {
    className?: string;
    fillerWidth: number;
    progressBar: ProgressBarType;
}

/**
 * 
 * @param progressBar Progressbar object, in which valueNow is the only mandatory property.
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
            className={`item ${className}`}
            style={
                {
                    "--progress-bar-item-width": `${fillerWidth}`,
                } as CSSProperties
            }
        >
            <div
                className="fill"
                role="progressbar"
                style={
                    {
                        "--progress-bar-fill-color": 
                            (progressBar.valueNow === valueMax && !!progressBar.filledColor)
                            ? `var(${progressBar.filledColor})`
                            : !!progressBar.fillColor ? 
                                `var(${progressBar.fillColor})` : 
                                "var(--component-progressbar-color-fg-default)"
                    } as CSSProperties
                }
                aria-valuenow={progressBar.valueNow}
                aria-valuemin={valueMin}
                aria-label={progressBar["aria-label"]}
                aria-labelledby={progressBar["aria-labelledby"]}
                aria-valuetext={progressBar.explainOtherUnitThanPercentage}
                aria-valuemax={valueMax}
            ></div>
        </li>
    );
};
