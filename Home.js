


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,Button} from 'react-native';
import CartList from './components/CartList';
import Header from './components/Header';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <CartList />
      
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
  
});
