import { makeStyles } from "@rneui/themed";
import React from "react";
import { View, Text, ScrollView } from "react-native";

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

interface GroupedCardsProps {
  children?: any;
  title: string;
}

const GroupedCards: React.FunctionComponent<GroupedCardsProps> = ({
  children,
  title,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.viewMore}>Wiew more</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.cardContainer}>
        {children}
      </ScrollView>
    </View>
  );
};

export default GroupedCards;
