/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Provider as Papel } from 'react-native-paper';


import Clase from './src/unCicle';
import Botons from './src/Botons';


import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from 'react-native-paper'

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));

  const nomProfes = (numero) => {
    const nomsProfesors = info.unitatTics[numero].curs[numero].profes.map((profesor) => profesor.nom);
    return nomsProfesors;
  };
  



  return (
    <View >
      <StatusBar />
      <Text style={estil.sectionTitle}> Unitat TICS </Text>
      <View style={estil.Clases} >
        <ScrollView horizontal={true}>
        <Clase Clase={info.unitatTics[0].cicle}Info={info.unitatTics[0].nomCicle}/>
        <Clase Clase={info.unitatTics[1].cicle}Info={info.unitatTics[1].nomCicle}/>
        <Clase Clase={info.unitatTics[2].cicle}Info={info.unitatTics[2].nomCicle}/>
        </ScrollView>
      </View>
      <Botons Noms={nomProfes(0)} />
    </View>
  );
};

const estil = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  Clases:{
    justifyContent:'center',
    flexDirection:'row'
  },

});

export default App;
