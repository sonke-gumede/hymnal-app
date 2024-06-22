import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BookMarkIcon = (props: any) => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={42} height={42} rx={21} fill="#171717" />
    <Path
      d="M13 16.9982H29M13 13.9982V27.9982C13 29.6463 14.8815 30.587 16.2 29.5982L19.8 26.8982C20.5111 26.3648 21.4889 26.3648 22.2 26.8982L25.8 29.5982C27.1185 30.587 29 29.6463 29 27.9982V13.9982C29 12.8936 28.1046 11.9982 27 11.9982H15C13.8954 11.9982 13 12.8936 13 13.9982Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookMarkIcon;
