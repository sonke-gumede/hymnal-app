import { createTheme } from "@rneui/themed";

const FontWightObject = () =>
  [...Array(9).keys()].map((x) => ({ [x * 100]: x * 100 }));

export default createTheme({
  colors: {
    primary: {
      gold: "#B28B54",
      pacificBlue: "#10B1C9",
      dark: "#171717",
      white: "#fff",
      lightGrey: "#D9D9D9"
    },
    secondary: {
      facebook: "#5469B2",
      google: "#B92828",
      deepCarmine: "#A5243D",
      fountainBlue: "#70B8CF",
      softPurple: "#A670CF",
      warmGrey: "#8F8F8F"
    },
    gradient: {
      gold: "#573A11",
      pacificBlue:"#064750",
      softPurple: "#533868"
    }
  },
  fonts: {
    fontFamily: { kronaOne: "Krona One" },
    // weight: FontWightObject(),
    size: {
      xsmall: 12,
      small: 14,
      medium: 16,
      large: 18,
      xlarge: 24,
    },
  },
});
