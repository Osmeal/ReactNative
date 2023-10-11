/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Button}from 'react-native-paper'

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <View >
      <StatusBar/>
      <Text style ={estil.sectionTitle}> Hola mundo </Text>
      <Button icon='camera-plus'>Polsa ací ja!!</Button>
    </View>
  );
};

const estil = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

});

export default App;
