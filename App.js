import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [name, setName] = useState('')
    const [submit, setSubmit] = useState(false)
    const [surname, setSurname] = useState('')
 
    const onPressHandler = () => {
        if (name.length < 3) {
            Alert.alert('Warning!', 'Imię musi zawierać minimum 3 znaki!', [
                { text: 'OK' }
            ], { cancelable: true })
        } else {
            setSubmit(!submit)
        }
    }
 
    return (
        <ImageBackground style={styles.container}
            source={{ uri: 'https://cdn.pixabay.com/photo/2013/11/11/22/29/brown-209106_960_720.jpg' }}
        >
            <View>
                <Text style={styles.header}>Imie i nazwisko</Text>
            </View>
 
 
            <View style={styles.inputBody}>
                <TextInput
                    style={styles.input}
                    placeholder='write name'
                      placeholderTextColor='#aaa'
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='write surname'
                    placeholderTextColor='#aaa'
                    value={surname}
                    onChangeText={(value) => setSurname(value)}
                />
                <Button
                    title={submit ? "Clear" : "Submit"}
                    onPress={onPressHandler}
                />
                {
                    submit ? <Text style={styles.bodyText}>Witaj {name} {surname}</Text> : null
                }
            </View>
 
            <View>
                <Text style={styles.footer}>Oles Khala</Text>
            </View>
        </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 0,
        margin: 0,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'royalblue'
    },
    inputBody: {
        alignSelf: 'center',
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 10,
        color: 'white',
    },
    input: {
        width: 200,
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    footer: {

        fontSize: 50,
        color: '#ddd',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    }
});