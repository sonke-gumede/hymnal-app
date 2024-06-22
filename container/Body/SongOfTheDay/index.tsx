import SongCard from "@/components/Cards/song.card";
import { makeStyles, useTheme } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";

const useStyles = makeStyles(({ colors, fonts }) => ({
  container: {
    marginTop: 30,
    paddingBottom: 10,
    width: "100%",
  },
  header: {
    color: colors.primary.white,
    fontSize: fonts.size.xlarge,
    fontWeight: "400",
    paddingVertical: 10,
  },
}));

const SongOfTheDay: React.FunctionComponent<any> = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Song of the day</Text>
      <SongCard
        gradient={[theme.colors.primary.gold, theme.colors.gradient.gold]}
      />
    </View>
  );
};

export default SongOfTheDay;
