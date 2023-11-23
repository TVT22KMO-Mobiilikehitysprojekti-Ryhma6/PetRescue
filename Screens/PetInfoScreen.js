import React from 'react';
import { View, Text } from 'react-native';


import { useNavigation } from '@react-navigation/native';

const PetInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { petId } = route.params;

  return (
    <View>
      <Text>PetInfoScreen for pet with id: {petId}</Text>
    
    </View>
  );
};

export default PetInfoScreen;