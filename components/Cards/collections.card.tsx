import React from "react";
import { makeStyles } from "@rneui/themed";
import { View, Text } from "react-native";
import { Image } from "expo-image";
const useRNStyle = makeStyles(({ fonts, colors }) => ({
  container: {
    display: "flex",
    width: 98,
    height: 150,
  },
  image: {
    width: 98,
    height: 92,
    borderRadius: 20,
  },
  title: {
    fontSize: fonts.size.medium,
    fontWeight: "400",
    color: colors.primary.white,
    flexWrap: "wrap",
    maxWidth: "100%",
  },
}));
interface CollectionsCardProps {
  title: string;
  image: string;
}
const CollectionsCard: React.FunctionComponent<CollectionsCardProps> = ({
  title,
  image,
}) => {
  const styles = useRNStyle();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CollectionsCard;
