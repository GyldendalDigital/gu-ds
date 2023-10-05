import React, { FunctionComponent } from "react";

export interface ExampleProps {
  backgroundColor: string;
  message: string;
}

export const propNames = {
  backgroundColor: "string",
  message: "string",
};

/** JSDoc på komponent vises ikke i Storybook >_> */
export const Example: FunctionComponent<ExampleProps> = ({
  message,
  backgroundColor,
}) => <div style={{ backgroundColor }}>{message}</div>;
