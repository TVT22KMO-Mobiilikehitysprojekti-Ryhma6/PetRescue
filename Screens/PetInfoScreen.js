import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { petDATA } from '../DATA';

const PetInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { petId } = route.params;
  const [petInfo, setPetInfo] = useState(null);

  const fetchPetInfo = (id) => {
    // Etsi lemmikin tiedot petDATA-tietokannasta käyttäen id:tä
    const pet = petDATA.find(pet => pet.id === id);

    //console.log('Pet info:', pet);

    // Aseta lemmikin tiedot tilamuuttujaan
    setPetInfo(pet);
  };

  useEffect(() => {
    fetchPetInfo(petId);
  }, [petId]);

  if (!petInfo) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={petInfo.dogImage}
        style={styles.petImage}
      />
      <Text style={styles.petName}>Nimi: {petInfo.dogName}</Text>
      <Text style={styles.petAge}>Ikä: {petInfo.dogAge}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebbc',
    alignItems: 'center',
  },
  petImage: {
    width: 430,
    height: 300,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  petAge: {
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default PetInfoScreen;