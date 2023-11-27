import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    <View style={styles.container}>
      <FlatList
        data={petDATA}
        renderItem={renderPetItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.petContainer}
      />
      <TouchableOpacity style={styles.questionButton} onPress={() => navigation.navigate('Questions')}>
        <Text style={styles.questionButtonText}>  ?  </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebbc',
  },
  petContainer: {
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
  questionButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5da7ae',
    padding: 15,
    borderRadius: 40,
  },
  questionButtonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default SearchPetScreen;
