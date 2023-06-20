import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";

import fetchInitialDeals from "./src/ajax";
import DealList from "./src/components/DealList";

const App = () => {
  const [deals, setDeals] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedDeals = await fetchInitialDeals();
      setDeals(fetchedDeals);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {deals.length > 0 ? (
        <DealList deals={deals} />
      ) : (
        <Text style={styles.header}>Bakesale</Text>
      )}
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
