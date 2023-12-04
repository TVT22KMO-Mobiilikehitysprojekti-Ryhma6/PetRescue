import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Animated } from 'react-native';
import { petDATA } from '../DATA';

const PetInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { petId } = route.params;
  const [petInfo, setPetInfo] = useState(null);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

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

  const headerHeight = 100000; // Korkeus, jonka jälkeen tiedot paljastuvat

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });  

  return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: headerOpacity }}>
          <Image source={petInfo.dogImage} style={styles.petImage} />
        </Animated.View>
      <View style={styles.petDetails}>
          <Text style={styles.petName}>Nimi: {petInfo.dogName}</Text>
          <Text style={styles.petAge}>Ikä: {petInfo.dogAge}</Text>
          <Text style={styles.petBreed}>Rotu: {petInfo.dogBreed}</Text>
        </View>
       <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
>
        <View>
          <Text style={styles.dogInfo}>{petInfo.dogInfo}</Text>
          <Text style={styles.healthHeader}>Terveystiedot:</Text>
          <Text style={styles.dogHealthInfo}>{petInfo.dogHealthInfo} </Text>
        </View>

        <View>
          <Text style={styles.contactInfo}>Jos kiinostuit koirasta {petInfo.dogName} niin painamalla 'Ota yhteyttä' nappia pääset täyttämään lomakkeeseen tiedot itsestäsi. </Text>
        </View>

        <TouchableOpacity 
          style={styles.ContactButton} 
          onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.contactText}>  Ota yhteyttä  </Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  petImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  petDetails: {
    width: 400,
    height: 75,
    alignSelf: 'center',
    backgroundColor: '#AFEEEE',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 10,
  },
  petName: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  petAge: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  petBreed: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
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
  contactInfo: {
    padding: 20,
    marginLeft: 20,
    marginRight: 10,
    fontSize: 14,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContactButton: {
    backgroundColor: '#AFEEEE',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    width: '40%',
    marginLeft: '30%',
    borderWidth: 1,
    borderColor: 'black',
  },
  contactText: {
    color: 'black',
    textAlign: 'center',
  }
});

export default PetInfoScreen; 
