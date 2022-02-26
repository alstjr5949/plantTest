import { DefaultTheme } from "styled-components";

const size = {
  desktop: "1700px",
  laptop: "1430px",
};

export const theme: DefaultTheme = {
  desktop: `(min-width: ${size.desktop})`,
  laptop: `(min-width: ${size.laptop})`,
};
