import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Alert, TouchableOpacity } from 'react-native';

export default function ContactInformationScreen() {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');

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
    <ScrollView contentContainerStyle={styles.container}>
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
      />
      <TouchableOpacity
        style={styles.sendButton}
        //onPress={() => navigation.navigate('PetSearch', { message: message })}
      >
        <Text style={{ color: '#543d46' }}>Lähetä</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  header: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    color: '#5da7ae',
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#543d46',
    marginBottom: 20,
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
    backgroundColor: '#ffebbc',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    width: '40%',
    marginLeft: '30%',
  },
});