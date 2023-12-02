import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Logo from '../picture/Logo.jpg';

export default function HomeScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#5da7ae',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
      <Text style={styles.header}>Tervetuloa!</Text>
      <Text style={styles.infoText}>
        Etsitkö uskollista ystävää? Ystävää jonka kanssa jakaa elämän ilot ja surut? Haluaisitko
        mahdollisesti antaa Lemmikille uuden turvallisen kodin?
      </Text>
      <Text style={styles.infoText}>
        Jos vastasit kyllä, olet oikeassa paikassa ja ehkäpä jopa askeleen lähempänä uutta ystävääsi!
      </Text>
      <Text style={styles.infoText}>
        Olemme PetRescue ja haluamme toimia turvallisena välikätenä lemmikeiden adoptoimiseen.
      </Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={{ color: '#543d46' }}>Aloita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0981A3',
    paddingTop: 80,
  },
  logo: {
    width: 210,
    height: 210,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    padding: 10,
    width: 500,
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },
  infoText: {
    padding: 8,
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    color: 'white'

  },
  startButton: {
    backgroundColor: '#F4E7D4',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 100,
  },
});
