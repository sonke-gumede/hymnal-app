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
    };
    fonts: {
      fontFamily: {
        kronaOne: string;
      };
      weight: Record<number, number>[];
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
