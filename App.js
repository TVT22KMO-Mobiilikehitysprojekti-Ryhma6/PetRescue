import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import SearchPetScreen from './Screens/SearchPetScreen';
import PetInfoScreen from './Screens/PetInfoScreen';
import QuestionsScreen from './Screens/QuestionsScreen'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options= {{
            title: '',
            headerTitle: '',
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="Search"
          component={SearchPetScreen}
          options= {{
            title: '',
            headerTitle: 'Adoptoitavat koirat',
          }}
          />
          <Stack.Screen
          name="PetInfoScreen"
          component={PetInfoScreen}
          options= {{
            title: 'Info',
            headerTitle:'Info',
          }}
          />
          <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options= {{
            title: '',
            headerTitle: '',
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    backgroundColor: '#AFEEEE',
  }
});