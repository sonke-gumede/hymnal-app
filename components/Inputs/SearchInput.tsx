import React from "react";
import { SearchBar, SearchBarProps, makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.primary.dark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  }
}));

const SearchInput:React.FunctionComponent<SearchBarProps> = ()=>{
  const styles = useStyles();
  return (
    <SearchBar
      
    
    />
  )
}


export default SearchInput;
