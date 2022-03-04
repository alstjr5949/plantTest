import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    desktop: string;
    laptop: string;
    IpadPro: string;
    Ipad: string;
    Iphone: string;
    IphoneX: string;
    mobile: string;
    color: {
      green: string;
    };
  }
}
