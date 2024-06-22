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
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 18,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewMore: {
    fontSize: fonts.size.medium,
    color: colors.primary.gold,
    fontWeight: "400",
  },
}));

const Favourites: React.FunctionComponent<any> = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const blue = [
    theme.colors.primary.pacificBlue,
    theme.colors.gradient.pacificBlue,
  ];
  const gold = [theme.colors.primary.gold, theme.colors.gradient.gold];
  const purple = [
    theme.colors.secondary.softPurple,
    theme.colors.gradient.softPurple,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Favourites</Text>
        <Text style={styles.viewMore}>Wiew more</Text>
      </View>
      <View style={styles.cardContainer}>
        <SongCard hideButtons={true} gradient={blue} />
        <SongCard hideButtons={true} gradient={gold} />
        <SongCard hideButtons={true} gradient={purple} />
      </View>
    </View>
  );
};

export default Favourites;
