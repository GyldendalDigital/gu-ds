import { Meta, StoryObj } from "@storybook/react";
import { SimpleProgressBar } from "./SimpleProgressBar";
import React from "react";
import { getProgressNameByPercentage } from "../utils/progressHelpers";

const labelledById = "aria-progress-id";

const getProgressSuffix = (progress: number) => {
    if (progress < 20) return "...";
    if (progress < 60) return ".";
    return "!";
};

const meta: Meta<typeof SimpleProgressBar> = {
    title: "progress-bar/Simple",
    component: SimpleProgressBar,
    argTypes: {
        progressInPercent: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
        labelledById: {
            control:{
                disable:true
              }
        }
    },
    decorators: [
        (Story, storyContext) => (
            <div>
                <span id={labelledById}>
                    Progress: {getProgressNameByPercentage(storyContext.args.progressInPercent)}
                    {getProgressSuffix(storyContext.args.progressInPercent)}</span>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        labelledById,
        progressInPercent: 20
    },
};
