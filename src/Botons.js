import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const DAM = ({Noms,Fotos}) => {
    const botones = [
        { icon: "bluetooth" },
        { icon: "camera" },
        { icon: "camera" },
        { icon: "heart" },
        { icon: "arrow" },
        { icon: "clock" },
      ];

    return (
        <View style={styles.PanelBotons}>
            {botones.map((boton, index) => (
        <View style={styles.PanelBotons} key={index}>
          <Button
            style={styles.Boto}
            textColor='white'
            icon={"flower"}
          ></Button>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    PanelBotons: {
        margin: 1,
        padding: 7,
    },

    PanelBoto: {
        margin: 1,
        textAlign:'center',
        alignItems: 'left',
    },
    Boto: {
        borderRadius:70,
        mode: 'contained',
        textColor: 'white',
        backgroundColor: 'purple',
        fontSize: 20,
        height: 60,
        width: 1,
    },
    titol: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
});

export default DAM;