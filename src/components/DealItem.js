import { StyleSheet, View, Text, Image } from "react-native";

import { priceDisplay } from '../util';

const DealItem = (props) => {
  return (
    <View>
      <Image source={{ uri: props.deal.media[0] }} style={styles.image} />
      <View>
        <Text>{props.deal.title}</Text>
        <Text>{priceDisplay(props.deal.price)}</Text>
        <Text>{props.deal.cause.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
});

export default DealItem;
