import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import NewsPage from './src/tutorials/HttpClientComponent';
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

      {/* <Button title="ListView Page"  */}
      <Button title="News Page" 
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
const Drawer = createDrawerNavigator();


// export default function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home Screen"}}/>
//         <Stack.Screen name="Profile" component={ProfileScreen}/>
//         {/* <Stack.Screen name="List" component={ListViewPage}/> */}
//         <Stack.Screen name="List" component={NewsPage}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// For Navigation inside the App
// https://reactnavigation.org/docs

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{title:"Home Screen"}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        {/* <Stack.Screen name="List" component={ListViewPage}/> */}
        <Drawer.Screen name="List" component={NewsPage}/>
      </Drawer.Navigator>
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
  item:{
    backgroundColor: "#fff",
    padding: 16,
    margin: 12
  },
  title:{
    fontSize: 16,
    color: "#f00"
  },
  subTitle:{
    fontSize: 12,
    color: "#f23"
  }
});
