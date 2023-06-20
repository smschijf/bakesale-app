import { StyleSheet, Text, View, FlatList } from "react-native";

const DealList = (props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.deals}
        renderItem={({ item }) => <Text>{item.title}</Text>}
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
