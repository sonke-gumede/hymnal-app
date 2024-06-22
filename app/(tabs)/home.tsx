import SearchInput from "@/components/Inputs/SearchInput";
import { makeStyles } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={{flex: 2}}>
        <Text>Home</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

