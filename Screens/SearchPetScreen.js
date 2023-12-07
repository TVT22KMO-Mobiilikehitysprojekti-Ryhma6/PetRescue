import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { haeKoiratFirestoresta } from '../firebase';

const SearchPetScreen = () => {
  const navigation = useNavigation();
  const [koirat, setKoirat] = useState([]);

  useEffect(() => {
  
    const haeKoirat = async () => {
      try {
        const koiratData = await haeKoiratFirestoresta();
        console.log('Koirat Firestoresta:', koiratData);
        setKoirat(koiratData);
      } catch (error) {
        console.error('Virhe koirien hakemisessa Firestoresta:', error);
      }
    };

    haeKoirat();
  }, []);

  const navigateToPetInfo = (petId) => {
    navigation.navigate('PetInfoScreen', { petId });
  };

  const renderPetItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.petCard}
      onPress={() => navigateToPetInfo(item.id)}
    >
      <Image source={{ uri: item.kuva }} style={styles.petImage} />
      <View style={styles.petNameContainer}>
      <Text style={styles.petName}>{item.nimi}</Text>
    </View>
    <Text style={styles.petAge}>{item.ika}-vuotias</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={koirat}
        renderItem={renderPetItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.petContainer}
      />
      <TouchableOpacity style={styles.questionButton} onPress={() => navigation.navigate('Questions')}>
        <Text style={styles.questionButtonText}> ? </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
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
    fontSize: 17,
  },
  questionButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0981A3',
    padding: 15,
    borderRadius: 40,
  },
  questionButtonText: {
    color: 'white',
    fontSize: 25,
  },
  petNameContainer: {
    backgroundColor: '#AFEEEE',
    padding: 5, 
    borderRadius: 10, 
    marginTop: 5,
  },
});

export default SearchPetScreen;