import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar, makeStyles } from "@rneui/themed";
import { Header as HeaderRNE } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.primary.dark,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 0
  },
}));

const Header = ({ navigation }:any) => {
  const styles = useStyles();
  return (
    <HeaderRNE
      barStyle="light-content"
      containerStyle={styles.container}
      leftComponent={
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Avatar
            size={30}
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
            }}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
          <Ionicons name="notifications-outline" color="white" size={30} />
        </TouchableOpacity>
      }
    />
  );
};

export default Header;
