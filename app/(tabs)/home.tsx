import SearchInput from "@/components/Inputs/SearchInput";
import Collections from "@/container/Body/Collections";
import Favourites from "@/container/Body/Favourites";
import SongOfTheDay from "@/container/Body/SongOfTheDay";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { ScrollView } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
    backgroundColor: theme.colors.primary.dark,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
}));

export default function HomeScreen() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <SearchInput />
      <ScrollView>
        <SongOfTheDay />
        <Favourites />
        <Collections />
        <View style={styles.separator} />
      </ScrollView>
    </View>
  );
}
