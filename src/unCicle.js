import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const unCicle = ({ Clase, Info, Color }) => {
  return (
    <View style={[styles.PanelTitol, { backgroundColor: 'white'}]}>
      <Text style={styles.titol}>{Clase}</Text>
      <Text style={styles.text}>{Info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  PanelTitol: {
    width:200,
    margin: 3,
    padding: 8,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: 'black',

  },

  titol: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
});

export default unCicle;