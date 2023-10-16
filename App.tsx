/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Provider as Papel } from 'react-native-paper';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  useColorScheme,
  Colour,
} from 'react-native';

import {Button, Switch}from 'react-native-paper'

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';

  const[necessiteDescans, setNecessiteDescans] = useState(true);//funcion para cambiar el estado del switch
  const[isWifi, setIsWifi] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle={backgroundColor: isDarkMode?Colors.darker:Colors.light};


  return (
    <View >
      
      <StatusBar
      barStyle={isDarkMode?'light-content':'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}/>
      <ScrollView/>
      <Image source={require('./Asets/gato.png')} style={estil.image}
      ></Image>
      <ImageBackground source={require('./Asets/fondo.jpg')} style={estil.imageBackground}
      ></ImageBackground>
      <Text style ={estil.sectionTitle}> Hola mundo </Text>
      <Button icon='camera-plus'>Polsa ací ja!!</Button>
      <Button 
      buttonColor='yellow'
      icon='alien'
      mode="outlined"
      >Alien</Button>
      <Switch
      disabled={false}
      color='red'
      value={necessiteDescans}
      onValueChange={()=>setNecessiteDescans(!necessiteDescans)}//funcion flecha que cambia el estado
      >
      </Switch>
    </View>
  );
};

const estil = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  imageBackground: {
    flex: 1,
    width: 420,
    height: 700,
  },
  image: {

    width: 420,
    height: 200,
  },
});

export default App;
