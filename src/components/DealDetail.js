import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

import { priceDisplay } from "../util";
import { fetchDealDetail } from "../ajax";

const DealDetail = (props) => {
  const imageXPos = new Animated.Value(0);

  const imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt, gs) => {
      const width = Dimensions.get("window").width;
      if (Math.abs(gs.dx) > width * 0.4) {
        const direction = Math.sign(gs.dx)
        // -1 for left, 1 for right
        Animated.timing(imageXPos, {
          toValue: direction * width,
          duration: 250,
        }).start();
      }
    },
  });

  const [deal, setDeal] = useState();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fullDeal = await fetchDealDetail(props.initialDealData.key);
      console.log(fullDeal);
      setDeal(fullDeal);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.deal}>
      <TouchableOpacity onPress={props.onBack}>
        <Text style={styles.backLink}>Back</Text>
      </TouchableOpacity>
      <Animated.Image
        {...imagePanResponder.panHandlers}
        source={{ uri: props.initialDealData.media[imageIndex] }}
        style={[{ left: imageXPos }, styles.image]}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{props.initialDealData.title}</Text>
        <View>
          <Text style={styles.price}>
            {priceDisplay(props.initialDealData.price)}
          </Text>
          <Text style={styles.cause}>{props.initialDealData.cause.name}</Text>
        </View>
        {deal && deal.user && (
          <>
            <View style={styles.userInfo}>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text>{deal.user.name}</Text>
            </View>
            <View style={styles.description}>
              <Text>{deal.description}</Text>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  deal: {
    marginTop: 12,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
    // borderColor: "#bbb",
    // borderWidth: 2,
    // borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    backgroundColor: "#fad3a6",
  },
  price: {
    fontWeight: "bold",
    paddingLeft: "10%",
  },
  cause: {
    paddingLeft: "10%",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  userInfo: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  description: {
    paddingTop: 10,
  },
  backLink: {
    marginBottom: 10,
    color: "#22f",
  },
});

export default DealDetail;
