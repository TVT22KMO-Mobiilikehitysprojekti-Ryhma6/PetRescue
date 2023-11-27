import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../picture/Logo.jpg';

export default function ConfirmationScreen() {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
    <Text style={styles.header}>Kiitos!</Text>
    <Text style={styles.subHeader}>Vastaanotimme hakemuksesi</Text>
    <Text style={styles.infoText}>
    Rescueyhdistys ottaa sinuun yhteyttä viikon sisällä, jotta voimme varmistaa, että kaikki käytännön järjestelyt sujuvat saumattomasti ja uusi perheenjäsenesi saa parhaan mahdollisen alkunsa uudessa kodissaan.
    </Text>
    <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: 'white' }}>Etusivulle</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffebbc',
    padding: 20,
  },
  logo: {
    width: 210,
    height: 210,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    fontSize: 40,
    color: '#5da7ae',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 25,
    color: '#543d46',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#543d46',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#5da7ae',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 100,
  },
});