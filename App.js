import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";

import fetchInitialDeals from "./src/ajax";
import DealList from "./src/components/DealList";
import DealDetail from "./src/components/DealDetail";

const App = () => {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDeal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDeals = await fetchInitialDeals();
      setDeals(fetchedDeals);
    };

    fetchData();
    setCurrentDeal(currentDealId);
  }, []);

  const currentDeal = () => {
    return deals.find((deal) => deal.key === currentDealId);
  };

  if (currentDealId) {
    return <DealDetail deal={currentDeal()} />;
  }
  if (deals.length > 0) {
    return <DealList deals={deals} onItemPress={setCurrentDeal} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bakesale</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
  },
});

export default App;
