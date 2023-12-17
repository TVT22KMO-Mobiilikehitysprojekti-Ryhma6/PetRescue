import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../picture/Logo.jpg';
import { Entypo } from '@expo/vector-icons';

export default function ConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.header}>Kiitos!</Text>
      <Text style={styles.subHeader}>Vastaanotimme hakemuksesi</Text>
      <Text style={styles.infoText}>
        Rescueyhdistys ottaa sinuun yhteyttä viikon sisällä, jotta voimme varmistaa, että kaikki käytännön järjestelyt sujuvat saumattomasti ja uusi perheenjäsenesi saa parhaan mahdollisen alkunsa uudessa kodissaan.
      </Text>
      <Text style={styles.infoText}>Kysymyksiä? Ota yhteyttä: info@petrescue.fi</Text>
      <Text style={styles.donateText}>
        Haluatko tukea rescueyhdistysten toimintaa? Klikkaa{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Donate')}>tästä</Text>
      </Text>

      <View style={styles.socialMediaContainer}>
        <Text style={styles.socialMediaText}>Seuraa meitä somessa:</Text>
        <TouchableOpacity style={styles.socialMedia}>
          <Entypo name="instagram-with-circle" size={24} color='#0981A3' />
          <Text style={{ color: '#543d46' }}> Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMedia}>
          <Entypo name="facebook-with-circle" size={24} color='#0981A3' />
          <Text style={{ color: '#543d46' }}> Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={{ color: 'white' }}>Etusivulle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E7D4',
    padding: 20,
    paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 20,
  },
  header: {
    marginTop: 10,
    width: 500,
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'center',
    color: '#0981A3'
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 25,
    color: '#543d46',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#543d46',
    textAlign: 'center',
  },
  donateText: {
    fontSize: 15,
    color: '#543d46',
    textAlign: 'center',
    marginTop: 12,
  },
  homeButton: {
    backgroundColor: '#0981A3',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 100,
  },
  linkText: {
    color: '#0981A3',
    marginTop: 1,
    textDecorationLine: 'underline',
  },
  socialMediaContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  socialMediaText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#543d46',
  },
  socialMedia: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});