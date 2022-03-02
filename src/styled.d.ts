import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    desktop: string;
    laptop: string;
    color: {
      green: string;
    };
  }
}
