import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
//import React, { useEffect, useState } from 'react';

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('PetRescue');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'lightgreen'
            },
            headerRight: () => (

                <AntDesign
                style={styles.navButton}
                name='arrowright'
                size={24}
                onPress={() => navigation.navigate('Second', {message: message})}
                />
            )
        })
    }, [message])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tervetuloa {message} sovellukseen!</Text>
            <Text style={styles.infoText}>Etsitkö uskollista ystävää? Ystävää jonka kanssa jakaa elämän ilot ja surut? Haluaisitko mahdollisesti antaa Lemmikille uuden turvallisen kodin?</Text>
            <Text style={styles.infoText}>Jos vastasit kyllä, olet oikeassa paikassa ja ehkäpä jopa askeleen lähempänä uutta ystävääsi!</Text>
            <Text style={styles.infoText}>Olemme PetRescue ja haluamme toimia turvallisena välikätenä lemmikeiden adoptoimiseen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    },
    header : {
        padding: 10,
        width: 500,
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 30,
        center: 3,  
    },
    infoText : {
        padding: 15,
        center: 1,
        fontSize: 15
    }
    
    
});