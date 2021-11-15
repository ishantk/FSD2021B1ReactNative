import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import home from './assets/home.png';

// Using Images and Styling
// Working with Function and Class Component

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={home} style={styles.image}/>
      <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/fsd2021b1.appspot.com/o/restaurant-images%2Frestaurant1.jpg?alt=media&token=467956dc-314a-4691-9a43-25e409f48bfb"}} style={styles.image}/>
      <Text style={{backgroundColor: '#aed', fontSize: 36}}>Welcome to My App</Text>
      <Text style={styles.myBackground}>Proceed Further</Text>
    </View>
  );
}

/*export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Image source={home} style={styles.image}/>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/fsd2021b1.appspot.com/o/restaurant-images%2Frestaurant1.jpg?alt=media&token=467956dc-314a-4691-9a43-25e409f48bfb"}} style={styles.image}/>
        <Text style={{backgroundColor: '#aed', fontSize: 36}}>Welcome to My App</Text>
        <Text style={styles.myBackground}>Proceed Further</Text>
      </View>
    );

  }

}*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
      fontSize: 24,
      color: "#f00",
      marginBottom: 12
    },
    myBackground:{
      backgroundColor: '#fae',
      fontSize: 24,
      marginBottom: 20
    },
    image: {
      width: 300,
      height: 200,
      marginBottom: 20
    }, 
  });