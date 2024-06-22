import React from "react";
import { SearchBar, SearchBarProps, makeStyles } from '@rneui/themed';
import { View, Text } from "react-native";

const useSarchBarStyle = makeStyles((theme) => ({
  inputContainerStyle: {
    backgroundColor: theme.colors.primary.dark,
    borderColor: theme.colors.primary.white,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftWidth:1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    padding: 0
  },
  containerStyle:{
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 0,
    width: '100%'
  },
  searchIcon: {
    color: theme.colors.primary.white
  },
  inputStyle: {
    borderWidth: 0
  }
}));

const useRNStyle = makeStyles(({colors, fonts})=>({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: 'column',
    width: '100%'
  },
  header: {
    color: colors.primary.gold,
    fontSize: fonts.size.large,
    fontWeight: '400',
    marginBottom: 5
  }
}))

const SearchInput: React.FunctionComponent<SearchBarProps> = () => {
  const searchBarStyles = useSarchBarStyle();
  const rnStyle = useRNStyle();
  return (
    <View style={rnStyle.container}>
    <Text style={rnStyle.header}>What song will inspire you today</Text>
    <SearchBar
      inputStyle={searchBarStyles.inputStyle}
      containerStyle={searchBarStyles.containerStyle}
      searchIcon={searchBarStyles.searchIcon}
      inputContainerStyle={searchBarStyles.inputContainerStyle}
      placeholderTextColor="white"
      placeholder="Search"
      
    />
    </View>
  )
}


export default SearchInput;
