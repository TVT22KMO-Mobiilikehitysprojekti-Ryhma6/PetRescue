import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View, KeyboardAvoidingView, Image } from 'react-native';
import Picture from '../picture/Donate.jpg';

export default function DonateScreen({ navigation })  {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = (amount) => {
    navigation.navigate('DonateThanks');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#F4E7D4',
      },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
        <Image source={Picture} style={styles.picture} />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Valitse lahjoitussumma:</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.donationButton}
            onPress={() => handleDonation(10)}
          >
            <Text style={styles.buttonText}>10 €</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.donationButton}
            onPress={() => handleDonation(25)}
          >
            <Text style={styles.buttonText}>25 €</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.donationButton}
            onPress={() => handleDonation(50)}
          >
            <Text style={styles.buttonText}>50 €</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ownAmountText}>Tai syötä oma summa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Syötä summa"
          keyboardType="numeric"
          value={donationAmount}
          onChangeText={(text) => setDonationAmount(text)}
        />

        <TouchableOpacity
          style={styles.lahjoitaButton}
          onPress={() => handleDonation(donationAmount)}
        >
          <Text style={styles.buttonText}>Lahjoita</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          Lahjoituksesi tukee rescueyhdistysten toimintaa ja auttaa tarjoamaan parempaa elämää kodittomille koirille. 
          Rahat voivat kattaa eläinlääkärikustannuksia, ruokaa, majoitusta ja muita tarpeellisia resursseja, joiden avulla 
          koirat voivat saada hyvän hoidon ja mahdollisuuden löytää rakastavan kodin.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
      alignSelf: 'center',
    },
    scrollContainer: {
      marginTop: 30,  
      justifyContent: 'center',
    },
    picture: {
        width: 320,
        height: 160,
        resizeMode: 'cover',
        alignSelf: 'center',
      },
    header: {
      fontSize: 18,
      color: '#0981A3',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    donationButton: {
        backgroundColor: '#0981A3',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    lahjoitaButton: {
        backgroundColor: '#0981A3',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    ownAmountText: {
      textAlign: 'center',
        fontSize: 15,
        marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
    },
    infoText: {
      color: '#543d46',
      textAlign: 'center',
      fontSize: 15,
      color: '#333',
      padding: 15,
    },
  });