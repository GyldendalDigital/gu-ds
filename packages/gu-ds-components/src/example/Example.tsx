import tokens from "gu-ds-base/output/tokens.json";
import type { FunctionComponent } from "react";
import React from "react";
import classNames from "./example.module.css";

export interface ExampleProps {
  backgroundColor: string;
  message: string;
}

export const propNames = {
  backgroundColor: "string",
  message: "string",
};

/** JSDoc på komponent vises ikke i Storybook */
export const Example: FunctionComponent<ExampleProps> = ({
  message,
  backgroundColor,
}) => (
  <div
    className={classNames.example}
    style={{
      backgroundColor,
      padding: tokens.primitives.size[16],
      border: `solid 1px ${tokens.primitives.color.gray[800]}`,
    }}
  >
    {message}
  </div>
);
