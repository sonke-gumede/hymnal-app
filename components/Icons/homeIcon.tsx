import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon: React.FunctionComponent<any> = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 10.1503V17.9668C21 20.1943 19.2091 22 17 22H7C4.79086 22 3 20.1943 3 17.9668V10.1503C3 8.93937 3.53964 7.7925 4.46986 7.02652L9.46986 2.90935C10.9423 1.69689 13.0577 1.69688 14.5301 2.90935L19.5301 7.02652C20.4604 7.7925 21 8.93937 21 10.1503ZM10 17.25C9.58579 17.25 9.25 17.5858 9.25 18C9.25 18.4142 9.58579 18.75 10 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25H10Z"
      fill={props.color}
    />
  </Svg>
);
export default HomeIcon;
