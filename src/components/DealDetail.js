import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

import { priceDisplay } from '../util';

const DealDetail = (props) => {
  return (
    <SafeAreaView style={styles.deal}>
      <Image source={{ uri: props.deal.media[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{props.deal.title}</Text>
        <Text>{priceDisplay(props.deal.price)}</Text>
        <Text>{props.deal.cause.name}</Text>
      </View>
      <Text>...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 2,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default DealDetail;
