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
      <Text style={styles.petAge}>{item.dogAge}-vuotias</Text>
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
    backgroundColor: '#AFEEEE',
  },
  petContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petCard: {
   marginBottom: 20,
   alignItems: 'center',
   marginRight: 10,
   marginLeft: 10,
   marginTop: 5,
  },
  petImage: {
    width: 155,
    height: 155,
    borderRadius: 75,
    marginBottom: 10,
  },
  petName: {
    fontSize: 21,
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