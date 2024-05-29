// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        gold: string;
        pacificBlue: string;
        dark: string;
        white: string;
      };
      secondary: {
        facebook: string;
        google: string;
        deepCarmine: string;
        fountainBlue: string;
        softPurple: string;
        warmGrey: string;
      };
    };
    fonts: {
      fontFamily: {
        kronaOne: string;
      };
      weight: Record<number, number>;
      size: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
    };
  }
}
