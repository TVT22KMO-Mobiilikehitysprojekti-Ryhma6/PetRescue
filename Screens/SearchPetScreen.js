
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React, { useEffect,   useLayoutEffect } from 'react';


import { petDATA } from '../DATA';
const SearchPetScreen = () => {
  const navigation = useNavigation();

  const navigateToPetInfo = (petId) => {
    navigation.navigate('PetInfoScreen', { petId });
  };
  const renderPetItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.petCard}
      onPress={() => navigateToPetInfo(item.id)}
    >
      <Image source={item.dogImage} style={styles.petImage} />
      <Text style={styles.petName}>{item.dogName}</Text>
      <Text style={styles.petAge}>{item.dogAge} years old</Text>
    </TouchableOpacity>
  );
 


    return (
     
        <FlatList
          data={petDATA}
          renderItem={renderPetItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      );
    };
    
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#AFEEEE',
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