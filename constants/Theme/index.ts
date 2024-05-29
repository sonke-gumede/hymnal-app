const FontWightObject = () =>
  [...Array(9).keys()].map((x) => ({ [x * 100]: [x * 100] }));

export default {
  colors: {
    primary: {
      gold: "#B28B54",
      pacificBlue: "#10B1C9",
      dark: "#171717",
      white: "#fff",
    },
    secondary: {
      facebook: "#5469B2",
      google: "#B92828",
      deepCarmine: "#A5243D",
      fountainBlue: "#70B8CF",
      softPurple: "#A670CF",
      warmGrey: "#8F8F8F",
    },
  },
  fonts: {
    fontFamily: { kronaOne: "Krona One" },
    weight: FontWightObject(),
    size: {
      xsmall: "10px",
      small: "12px",
      medium: "14px",
      large: "16px",
      xlarge: "36px",
    },
  },
};
