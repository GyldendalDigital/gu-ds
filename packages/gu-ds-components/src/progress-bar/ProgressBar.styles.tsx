import styled from "styled-components";
import { primitives } from "gu-ds-tokens/output/tokens.json";
import { resetList, resetListItem } from "../utils/reset";
import { rootScale } from "../utils/scale";

export interface StyledProgressBarProps {
  barBackground?: string;
}

export const ProgressBarsList = styled.ul<StyledProgressBarProps>`
  ${resetList()};
  display: flex;
  width: 100%;
  height: ${rootScale("5px")};
  background: ${(props) =>
    props.barBackground
      ? props.barBackground
      : `${primitives.color.gray[100]}`};
  border-radius: ${rootScale("10px")};
`;

export const ProgressBarItem = styled.li`
  ${resetListItem()};
  width: calc(var(--value-now) * 1%);
`;

export interface FillProps {
  filledColor?: string;
}

export const Fill = styled.div<FillProps>`
  background: blue;
  border-radius: ${rootScale("10px")};
  width: 100%;
  height: 100%;
  transition: width 0.2s ease-in;
`;

export const ProgressBarPlaceholder = styled.div`
  height: ${rootScale("5px")};
  display: flex;
  width: 100%;
`;
