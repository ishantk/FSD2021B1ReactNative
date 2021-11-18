import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function SignInScreen({navigation}) {

    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    function signinUser(){
        console.log("Data On Button Click: "+email+" "+password);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User Sign In Success: "+user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    function navigateToRegister(){
        navigation.navigate("Register");
    }

    return (
      <View style={styles.container}>
          
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
          <Button title="Sign In" onPress={signinUser}/>
          <TouchableOpacity 
            style={styles.center}
            onPress={navigateToRegister}
          >
            <Text style={styles.text}>
                News User? Register Here
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