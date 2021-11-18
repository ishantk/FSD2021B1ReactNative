import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterScreen({navigation}) {

    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    function registerUser(){
        console.log("Data On Button Click: "+name+" "+email+" "+password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("News User Created: "+user.uid);
            // Firestore :)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    function navigateToSigin(){
        navigation.navigate("Signin");
    }

    return (
      <View style={styles.container}>
          
          <TextInput style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
          />

          <TextInput style={styles.input}
                placeholder="Email ID"
                value={email}
                onChangeText={setEmail}
          />
          <TextInput style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
          />
          <Button title="Register" onPress={registerUser}/>
          <TouchableOpacity 
            style={styles.center}
            onPress={navigateToSigin}
          >
            <Text style={styles.text}>
                Alreay a User? Sigin Here
            </Text>
        </TouchableOpacity>
         
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16, 
      margin: 16
    },
    input:{
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 12
    },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 16,
        margin: 12,
        color: "blue"
    }

    
  });