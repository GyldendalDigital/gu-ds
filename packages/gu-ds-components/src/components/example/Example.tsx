import React, { FunctionComponent } from "react";

interface Props {
  backgroundColor: string;
  message: string;
}

export const propNames = {
  backgroundColor: "string",
  message: "string",
};

export const Example: FunctionComponent<Props> = ({
  message,
  backgroundColor,
}) => <div style={{ backgroundColor }}>{message}</div>;
