import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Logo from '../picture/Logo.jpg';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('PetRescue');

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
      <Text style={styles.header}>Tervetuloa {message} sovellukseen!</Text>
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
        onPress={() => navigation.navigate('Search', { message: message })}
      >
        <Text style={{ color: '#543d46' }}>Aloita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#5da7ae',
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
    fontSize: 22,
    textAlign: 'center',
    color: 'white'
  },
  infoText: {
    padding: 8,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    color: 'white'
  },
  startButton: {
    backgroundColor: '#ffebbc',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 100,
  },
});
