/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { TextInput, Button, Icon, MD3Colors } from 'react-native-paper';


const App = () => {
  const [pes, setPes] = React.useState(0.0);
  const [altura, setAltura] = React.useState(0.0);
  const [result, setResult] = React.useState(0.0);
  const [misatge, setMisatge] = React.useState("");//crear objeto para mensaje y color

  const SetMisatge = () => {
    setResult(pes / (altura * altura));
    if (result < 18.5) { setMisatge("Peso insuficiente"); }
    else if (result < 24.9) { setMisatge("Normopeso"); }
    else if (result < 26.9) { setMisatge("Sobrepeso grado I "); }
    else if (result < 29.9) { setMisatge("Sobrepeso grado II (preobesidad)"); }
    else if (result < 34.9) { setMisatge("Obesidad de tipo I"); }
    else if (result < 39.9) { setMisatge("Obesidad de tipo II"); }
    else if (result < 49.9) { setMisatge("Obesidad de tipo III (mórbida)"); }
    else if (result > 49.9) { setMisatge("Obesidad de tipo IV (extrema)"); }
    else { setMisatge("Error en el valor de les dades"); }
  }

  const comprovaEntrada = (unVal) => {
    const expressioRegular = /^\d+\.\d+$|^\d+$/;
    return expressioRegular.test(unVal);
  }

  const pesCorrecte = (unPes) => {
    if (comprovaEntrada(unPes))
      setPes(unPes);
    else { setMisatge("Error en el valor de les dades"); }
  }

  const alturaCorrecte = (unAltu) => {
    if (comprovaEntrada(unAltu))
      setAltura(unAltu);
    else { setMisatge("Error en el valor de les dades"); }
  }


  return (

    <View style={styles.contenidor}>
      <View style={styles.PanelTitol}>
        <Text style={styles.titol}>Calculadora</Text>
        <View style={styles.PanelIMC}>
          <Text style={styles.I}>I</Text>
          <Text style={styles.M}>M</Text>
          <Text style={styles.C}>C</Text>
        </View>
      </View>

      <View style={styles.PanelDades}>
        <TextInput
          label="Pes (Kg)"
          mode='outlined'
          outlineColor='green'
          style={styles.txtIn}
          right={<TextInput.Affix text='Kg.'/>}
          onChangeText={txt => { pesCorrecte(txt); }} />
          <Text>{comprovaEntrada(pes)}</Text>
      </View>

      <View style={styles.PanelDades}>
        <TextInput
          label="Alcada (m)"
          style={styles.txtIn}
          mode='outlined'
          outlineColor='orange'
          right={<TextInput.Affix text='m.'/>}
          onChangeText={txt => { alturaCorrecte(txt); }} />
          <Text>Error</Text>
      </View>

      <View style={styles.PanelBoto}>
        <Button
          style={styles.Boto}
          onPress={SetMisatge}
          textColor='white'
          icon={"calculator"}
        >
          Calcular</Button>
      </View>

      <View>
        <Text style={styles.Resultat}>Tens un IMC de {result.toFixed(2)}</Text>
        <Text style={styles.Resultat}>{misatge}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },

  PanelTitol: {
    margin: 4,
    padding: 12,
  },

  titol: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  PanelDades: {
    margin: 1,
    padding: 3,
    marginLeft: 13,
    flexDirection: 'row',
  },

  PanelBoto: {
    fontSize: 20,
    margin: 3,
    padding: 17,
    alignItems: 'center',
  },

  txtIn: {
    fontSize: 20,
    height: 50,
    width: 180,
    mode:'outlined'
  },

  Boto: {
    mode: 'contained',
    textColor: 'white',
    backgroundColor: 'purple',
    fontSize: 20,
    height: 50,
    width: 360,
  },

  PanelIMC: {
    flexDirection: 'row',
    justifyContent:'center',
  },
 
  I: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'red',
  },
  M: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'green',
  },
  C: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'blue',
  },

  PanelResultat: {
    margin: 1,
    padding: 1,
  },

  Resultat: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;