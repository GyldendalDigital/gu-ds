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
  backgroundColor,
  message,
}) => <div style={{ backgroundColor }}>{message}</div>;
