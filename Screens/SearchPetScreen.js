import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { petDATA } from '../DATA';
const SearchPetScreen = ({ navigation }) => {
    const handleAdopt = (petId) => {
    
      const selectedPet = petDATA.find((pet) => pet.id === petId);
      console.log(`Adopting ${selectedPet.dogName}, ${selectedPet.dogAge} years old`);
    };
  
    return (
      <View style={styles.container}>
        {petDATA.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            style={styles.petCard}
            onPress={() => handleAdopt(pet.id)}
          >
            <Image source={pet.dogImage} style={styles.petImage} />
            <Text style={styles.petName}>{pet.dogName}</Text>
            <Text style={styles.petAge}>{pet.dogAge} years old</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    petCard: {
      marginBottom: 20,
      alignItems: 'center',
    },
    petImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 10,
    },
    petName: {
      fontSize: 18,
      marginTop: 5,
    },
    petAge: {
      fontSize: 16,
    },
  });
  
  export default SearchPetScreen;