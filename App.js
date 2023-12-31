import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import SearchPetScreen from './Screens/SearchPetScreen';
import PetInfoScreen from './Screens/PetInfoScreen';
import QuestionsScreen from './Screens/QuestionsScreen'
import ContactInformationScreen from './Screens/ContactInformationScreen';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConfirmationScreen from './Screens/ConfirmationScreen';
import DonateScreen from './Screens/Donatescreen';
import DonateThanksScreen from './Screens/DonateThanksScreen';


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
            headerStyle: {
              backgroundColor: '#AFEEEE',
            },
          }}
          />
          <Stack.Screen
          name="PetInfoScreen"
          component={PetInfoScreen}
          options= {{
            title: 'Lemmikin tiedot',
            headerTitle:'Lemmikin tiedot',
            headerStyle: {
              backgroundColor: '#AFEEEE',
            },
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
          <Stack.Screen
          name="Contact"
          component={ContactInformationScreen}
          options= {{
            title: '',
            headerTitle: '',
          }}
          />
          <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options= {{
            title: '',
            headerTitle: '',
            headerShown: false,
          }}
          />
          <Stack.Screen
          name="Donate"
          component={DonateScreen}
          options= {{
            title: '',
            headerTitle: '',
          }}
          />
          <Stack.Screen
          name="DonateThanks"
          component={DonateThanksScreen}
          options= {{
            title: '',
            headerTitle: '',
            headerShown: false,
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