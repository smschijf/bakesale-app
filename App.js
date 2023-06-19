import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import fetchInitialDeals from './src/ajax';
import DealList from './src/components/DealList';
import { useState } from 'react';

const App = () => {
  const [deals, setDeals] = useState([]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bakesale</Text>
      <DealList deals={deals} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;