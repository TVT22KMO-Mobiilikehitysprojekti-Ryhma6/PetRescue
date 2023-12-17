import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DonateThanksScreen({ navigation })  {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerStyle: {
            backgroundColor: '#F4E7D4',
          },
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kiitos lahjoituksesta!</Text>
            <Text style={styles.subheader}>
                Sähköpostiisi lähetetään kuitti lahjoituksestasi.   
            </Text>
            <Text style={styles.infoHeader}>
                Tiesitkö, että lahjoituksesi auttaa muun muassa   
            </Text>
            <Text style={styles.infoText}>
                • laajentamaan pelastustoiminnan kattavuutta. Se voi mahdollistaa pelastusyksiköiden lisäämisen eri alueille, mikä auttaa useampia kodittomia eläimiä.
            </Text>
            <Text style={styles.infoText}>
                • tukemaan tiedotuskampanjoita ja koulutusohjelmia, 
                jotka lisäävät yhteisön tietoisuutta kodittomien eläinten tarpeista ja auttavat vähentämään eläinten hylkäämistä.
            </Text>
            <Text style={styles.infoText}>
                • tukemaan ennaltaehkäisevää terveydenhuoltoa, kuten rokotuksia ja terveystarkastuksia, edistäen kodittomien eläinten yleistä terveyttä.
            </Text>
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
        justifyContent: 'center',
        backgroundColor: '#F4E7D4',
        padding: 20,
        paddingTop: 100,
    },
    header: {
        marginTop: 10,
        width: 300,
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 32,
        textAlign: 'center',
        color: '#0981A3',
        alignSelf: 'center',
    },
    subheader: {
        width: 300,
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#0981A3'
    },
    infoHeader: {
        fontSize: 15,
        color: '#543d46',
        textAlign: 'center',
        marginTop: 20,
    },
    infoText: {
        fontSize: 15,
        color: '#543d46',
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'left',
    },
    homeButton: {
        backgroundColor: '#0981A3',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 25,
    },
});