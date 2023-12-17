import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function ContactInformationScreen({ navigation })  {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#F4E7D4',
      },
    });
  }, [navigation]);
     
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const validateForm = () => {
    return !!firstName && !!lastName && !!phoneNumber && !!email && !!aboutMe;
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !phoneNumber || !email || !aboutMe) {
      Alert.alert('Virhe', 'Täytä kaikki pakolliset kentät', [{ text: 'OK', style: 'cancel' }]);
      return;
    }

    console.log('Etunimi:', firstName);
    console.log('Sukunimi:', lastName);
    console.log('Puhelinnumero:', phoneNumber);
    console.log('Sähköposti:', email);
    console.log('Kerro itsestäsi:', aboutMe);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Yhteystiedot</Text>
        <Text style={styles.infoText}>Anna meille hieman tietoja itsestäsi, jotta voimme ottaa sinuun yhteyttä.</Text>
        <Text style={styles.label}>Etunimi</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />

        <Text style={styles.label}>Sukunimi</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />

        <Text style={styles.label}>Puhelinnumero</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Sähköposti</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Kerro itsestäsi</Text>
        <TextInput
          style={styles.textarea}
          value={aboutMe}
          onChangeText={text => setAboutMe(text)}
          multiline={true}
          numberOfLines={4}
          placeholder="Miksi haluat adoptoida lemmikin? Minkälainen kokemus sinulla on eläinten kanssa? Muuta huomioitavaa?"
          textAlignVertical="top"
          textAlign="left"
          placeholderTextColor="#AAA6A4"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            if (validateForm()) {
              handleSubmit();
              navigation.navigate('Confirmation');
            } else {
              Alert.alert('Virhe', 'Täytä kaikki pakolliset kentät', [{ text: 'OK', style: 'cancel' }]);
            }
          }}
        >
          <Text style={{ color: '#543d46' }}>Lähetä</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: 'white',
  },
  header: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    color: '#0981A3',
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#543d46',
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  textarea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  sendButton: {
    backgroundColor: '#F4E7D4',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    width: '40%',
    marginLeft: '30%',
  },
});