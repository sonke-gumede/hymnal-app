import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";
import StarIcon from "../Icons/starIcon";
import BookMarkIcon from "../Icons/bookmarkIcon";

const useRNStyle = makeStyles(
  ({ colors, fonts }, { hideButtons }: SongCardProps) => ({
    container: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
      width: hideButtons ? 137 : "100%",
      height: 122,
      borderRadius: 20,
      padding: 10,
    },
    count: {
      fontSize: fonts.size.xlarge,
      fontWeight: "400",
      color: colors.primary.white,
    },
    content: {
      fontSize: fonts.size.small,
      fontWeight: "400",
      color: colors.primary.white,
    },
    contnetContainer: {
      width: hideButtons ? "auto" : 150,
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    icons: {
      display: hideButtons ? "none" : "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 100,
      alignSelf: "flex-end",
    },
  })
);

interface SongCardProps {
  hideButtons?: boolean;
  gradient: Array<string>;
}

const SongCard: React.FunctionComponent<SongCardProps> = (props) => {
  const rnStyles = useRNStyle(props);
  const { theme } = useTheme();
  return (
    <LinearGradient colors={props.gradient} style={rnStyles.container}>
      <View style={rnStyles.contnetContainer}>
        <Text style={rnStyles.count}>2</Text>
        <Text style={rnStyles.content}>All cratures of our God and king</Text>
      </View>
      <View style={rnStyles.icons}>
        <StarIcon />
        <BookMarkIcon />
      </View>
    </LinearGradient>
  );
};

export default SongCard;
