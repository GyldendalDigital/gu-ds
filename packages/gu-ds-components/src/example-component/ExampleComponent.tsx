import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const ExampleComponent: FunctionComponent<Props> = ({ children }) => {
  return <div>Hei, {children}</div>;
};
