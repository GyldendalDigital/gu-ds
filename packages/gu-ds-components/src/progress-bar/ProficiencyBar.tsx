import type { CSSProperties, FunctionComponent } from "react";
import React from "react";
import "./ProgressBar.module.css";
import { getProficiencyNameByPercentage } from "../utils/progressHelpers";
import { ProgressBar } from "./ProgressBar";

export interface Props {
    className?: string;
    labelledById: string;
    progressInPercent: number;
    style?: CSSProperties;
}

export const propNames = {
    className: "string",
    labelledById: "string",
    progressInPercent: "number",
    style: "json",
}

/**
 * A simple and accessible one-bar measuring proficiency by pre-defined values. This will probably cover most use cases.
 * @param progressInPercent A number indicating the achieved progress.
 * @returns One progress bar on background, with colors that are aligned with the achieved progress.
 */
export const ProficiencyBar: FunctionComponent<Props> = ({
    className,
    labelledById,
    progressInPercent,
    style,
}) => {

    return (
        <ProgressBar
            className={className}
            progressBars={[{
                "aria-labelledby": labelledById,
                valueNow: progressInPercent,
                fillColorVar: `--component-progressbar-color-fg-${getProficiencyNameByPercentage(progressInPercent)}`
            }]}
            style={{
                ...style,
                ...{
                    "--progress-bar-background-color": `var(--component-progressbar-color-bg-${getProficiencyNameByPercentage(progressInPercent)})`
                } as CSSProperties
            }
            } />
    );
};
