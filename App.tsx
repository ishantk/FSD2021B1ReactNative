import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ListViewPage from './src/tutorials/ListComponent';

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.textStyle}>This is a Home Screen</Text>
      <Button title="Profile Page"
      onPress = { 
        // ()=> navigation.navigate("Profile")
        ()=> navigation.push("Profile")
      }
      >
      </Button>

      <Text style={styles.textStyle}>List Demo</Text>

      <Button title="ListView Page" 
      onPress = { 
        ()=> navigation.push("List")
      }
      >
      </Button>

    </View>
  );
}

function ProfileScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is a Profile Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home Screen"}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="List" component={ListViewPage}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

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
