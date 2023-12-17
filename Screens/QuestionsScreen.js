import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const QuestionsScreen = ({ navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#F4E7D4',
        },
      });
    }, [navigation]);
    
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Tietoa PetRescue sovelluksesta:</Text>
          <Text style={styles.infoText}>
            PetRescue sovelluksen kautta voit selata adoptoitavia koiria ja löytää juuri sen oikean ystävän, jonka koti kaipaa.
          </Text>
          <Text style={styles.infoText}>Sovelluksemme on suunniteltu yksinkertaiseksi ja käyttäjäystävälliseksi: selaa, valitse ja luo ystävyyssuhde muutamalla napautuksella. Turvallisuus on meille etusijalla. Kaikki adoptiot käyvät läpi tarkan seulonnan, ja yhteystiedot pysyvät turvassa.
          </Text>
          <Text style={styles.header}>Usein kysytyt kysymykset:</Text>
          <Text style={styles.subHeader}>Miksi adoptoida?</Text>
          <Text style={styles.infoText}>
            Adoptoimalla annat kodittomalle eläimelle mahdollisuuden saada rakastava ja turvallinen koti. Se on kestävä valinta, joka vähentää kodittomien eläinten määrää ja tukee rescueyhdistyksiä.
          </Text>
          <Text style={styles.subHeader}>Kuinka kauan adoptioprosessi yleensä kestää?</Text>
          <Text style={styles.infoText}>
            Adoptioprosessin kesto vaihtelee lemmikin ja tilanteen mukaan. Rescueyhdistys ottaa sinuun yhteyttä viikon sisällä ja antaa lisätietoja prosessista.
          </Text>
          <Text style={styles.subHeader}>Onko adoptiolle kustannuksia?</Text>
          <Text style={styles.infoText}>
            Usein rescueyhdistykset perivät pienen adoptiomaksun, joka kattaa koiran perustarvikkeet ja terveydenhuollon. Tämä summa vaihtelee.
          </Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 15,
          textAlign: 'justify',
        },
        header: {
          fontSize: 18,
          color: '#0981A3',
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop: 10,
          textAlign: 'left',
        },
        subHeader: {
          color: '#543d46',
          fontWeight: 'bold',
          textAlign: 'left',
          marginTop: 10,
          marginBottom: 5,
        },
        infoText: {
          fontSize: 15,
          color: '#333',
          marginBottom: 10,
          textAlign: 'left',
        },
      });
      
      export default QuestionsScreen;