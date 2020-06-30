import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryLight: string;
  secondaryLight: string;
  primaryDark: string;
  secondaryDark: string;
  messageBackground: string;
}

export const darkTheme = {
  primaryLight: "#e9e9eb",
  secondaryLight: "#777",
  primaryDark: "#111",
  secondaryDark: "#111",
  messageBackground: "#292929",
};

export const lightTheme = {
  primaryLight: "#d1d1d1",
  secondaryLight: "#292929",
  primaryDark: "#292929",
  secondaryDark: "#ffffff",
  messageBackground: "#292929",
};

export default styled;
export { css, keyframes, ThemeProvider };
