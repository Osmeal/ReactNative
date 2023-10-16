/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider as Papel } from 'react-native-paper';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from 'react-native-paper'

const Saluda = (texto, indexo, nom) => {
  return (<Text style={estil.sectionTitle}>{texto}{"\n"}Hola {nom} {indexo}</Text>);//un metodo solo puede devolver un componente
};

/* Las dos opciones valen
const Saluda = (texto:string, nombre:string) => {
  return <View>
<Text style={estil.sectionTitle}>{texto}</Text>
<Text style={estil.sectionTitle}>Hola {nombre}</Text>
  </View>
};
*/

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';
  let esticLoguejat = true;
  const alumnesDam = ["Borja", "Marcel", "Sergi", "Laia"];


  //no hay que comparar con true, con nombre de variable se compara con true o usa !variable
  return (
    <Papel>
      <StatusBar />
      {
        alumnesDam.map((unAlumne, index) => {
          return(
          Saluda("HBenvingut ", index, unAlumne)
        )})

      }
    </Papel>
  );
};

//esticLoguejat && Saluda("Benvingut", "Oscar") es un if sense else resumit
/*  esticLoguejat
  ?Saluda("Benvingut", "Oscar")
  :Saluda("Primer t'has de loguejar", "Anònim")
  */

const estil = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
