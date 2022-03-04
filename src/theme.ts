import { DefaultTheme } from "styled-components";

const size = {
  desktop: "1700px",
  laptop: "1440px",
  IpadPro: "1366px",
  Ipad: "1024px",
  Iphone: "767px",
  IphoneX: "414px",
  mobile: "375px",
};

export const theme: DefaultTheme = {
  desktop: `(min-width: ${size.desktop})`,
  laptop: `(max-width: ${size.laptop})`,
  IpadPro: `(max-width: ${size.IpadPro})`,
  Ipad: `(max-width: ${size.Ipad})`,
  Iphone: `(max-width: ${size.Iphone})`,
  IphoneX: `(max-width: ${size.IphoneX})`,
  mobile: `(max-width: ${size.mobile})`,
  color: {
    green: "#0ABF04",
    brown: "#966254",
  },
};
