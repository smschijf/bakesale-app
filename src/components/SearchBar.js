import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import debounce from "lodash.debounce";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchDeals = debounce(props.searchDeals, 300);
  const handleChange = (searchTerm) => {
    debouncedSearchDeals(searchTerm);
  };

  return (
    <TextInput
      placeholder="Search All Deals"
      style={styles.input}
      onChangeText={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    padding: 5,
  },
});

export default SearchBar;
