import SearchInput from "@/components/Inputs/SearchInput";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchInput placeholder="Search" />
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
