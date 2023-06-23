import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";

import { fetchInitialDeals, fetchDealsSearchResults } from "./src/ajax";
import DealList from "./src/components/DealList";
import DealDetail from "./src/components/DealDetail";
import SearchBar from "./src/components/SearchBar";

const App = () => {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDeal] = useState();
  const [dealsFromSearch, setdealsFromSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDeals = await fetchInitialDeals();
      setDeals(fetchedDeals);
    };

    fetchData();
    setCurrentDeal(currentDealId);
  }, []);

  const unsetCurrentDeal = () => {
    setCurrentDeal(null);
  };

  const searchDeals = async (searchTerm) => {
    if (searchTerm) {
      const dealsFromSearch = await fetchDealsSearchResults(searchTerm);
      setdealsFromSearch(dealsFromSearch);
    } else {
      setdealsFromSearch([]);
    }
  };
  const clearSearch = () => {
    setdealsFromSearch([]);
  };

  const currentDeal = () => {
    return deals.find((deal) => deal.key === currentDealId);
  };

  if (currentDealId) {
    return (
      <DealDetail initialDealData={currentDeal()} onBack={unsetCurrentDeal} />
    );
  }
  const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : deals;
  if (dealsToDisplay.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar searchDeals={searchDeals} />
        <DealList deals={dealsToDisplay} onItemPress={setCurrentDeal} />
      </SafeAreaView>
    );
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
