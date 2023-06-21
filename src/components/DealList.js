import { StyleSheet, View, FlatList } from "react-native";

import DealItem from './DealItem';

const DealList = (props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.deals}
        renderItem={({ item }) => <DealItem deal={item} onPress={props.onItemPress} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
    flex: 1,
    width: "100%",
    paddingTop: 10,
  },
});

export default DealList;
