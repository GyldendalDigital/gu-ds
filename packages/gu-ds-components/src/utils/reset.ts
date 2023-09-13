import { css } from "styled-components";

export const resetHeading = () => css`
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
`;

export const resetList = () => css`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style: none;
`;

export const resetListItem = () => css`
  margin: 0;
  padding: 0;
`;

export const resetParagraph = () => css`
  margin: 0;
  font-size: inherit;
  line-height: inherit;
`;

export const resetAddress = () => css`
  font-style: normal;
`;

export const resetPre = () => css`
  margin: 0;
`;

export const resetDl = () => css`
  margin: 0;
`;

export const resetHr = () => css`
  margin: 0;
  border-top: none;
  border-bottom: solid 1px currentColor;
`;

export const resetButton = () => css`
  appearance: none;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  text-align: inherit;
  font-size: 1em;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const resetFigure = () => css`
  margin: 0;
`;

export const resetFieldset = () => css`
  margin: 0;
  border: 0;
  padding: 0;
  min-width: 0;
`;

export const resetDialog = () => css`
  margin: 0;
  border: 0;
  padding: 0;
  background-color: transparent;
`;
