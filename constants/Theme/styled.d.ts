// import original module declarations
import "@rneui/themed";

// and extend them!
declare module '@rneui/themed' {
  export interface Theme {
    colors: {
      primary: {
        gold: string;
        pacificBlue: string;
        dark: string;
        white: string;
        lightGrey: string;
      };
      secondary: {
        facebook: string;
        google: string;
        deepCarmine: string;
        fountainBlue: string;
        softPurple: string;
        warmGrey: string;
      };
      gradient: {
        gold: string;
        pacificBlue: string;
        softPurple: string;
      }
    };
    fonts: {
      fontFamily: {
        kronaOne: string;
      };
      weight: any;
      size: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
    };
  }
}
