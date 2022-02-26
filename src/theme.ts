import { DefaultTheme } from "styled-components";

const size = {
  desktop: "1700px",
  laptop: "1440px",
};

export const theme: DefaultTheme = {
  desktop: `(min-width: ${size.desktop})`,
  laptop: `(max-width: ${size.laptop})`,
};
