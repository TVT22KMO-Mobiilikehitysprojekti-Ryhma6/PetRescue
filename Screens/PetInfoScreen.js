import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { petDATA } from '../DATA';

const PetInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { petId } = route.params;
  const [petInfo, setPetInfo] = useState(null);

  const fetchPetInfo = (id) => {
    const pet = petDATA.find(pet => pet.id === id);

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
    <ScrollView style={styles.container}>
      <View>
        <Image source={petInfo.dogImage} style={styles.petImage} />
        <Text style={styles.petName}>Nimi: {petInfo.dogName}</Text>
        <Text style={styles.petAge}>Ikä: {petInfo.dogAge}</Text>
        <Text style={styles.dogInfo}>{petInfo.dogInfo}</Text>
        <Text style={styles.healthHeader}>Terveystiedot:</Text>
        <Text style={styles.dogHealthInfo}>{petInfo.dogHealthInfo} </Text>
        <TouchableOpacity 
          style={styles.ContactButton} 
          onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.contactText}>  Ota yhteyttä  </Text>
        </TouchableOpacity>
      </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  petImage: {
    width: 400,
    height: 300,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  petDetails: {
    marginLeft: 20, 
    alignSelf: 'flex-start', 
  },
  petName: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
  petAge: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '600',
  },
  dogInfo: {
    marginLeft: 20,
    marginRight: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,
  },
  dogHealthInfo: {
    marginLeft: 20,
    marginRight: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,
  },
  healthHeader: {
    marginLeft: 20,
    marginRight: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
  },
  ContactButton: {
    backgroundColor: '#ffebbc',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 25,
    marginLeft: 130,
    marginRight: 130,
  },
  contactText: {
    color: '#543d46',
    textAlign: 'center',

  }
});

export default PetInfoScreen;