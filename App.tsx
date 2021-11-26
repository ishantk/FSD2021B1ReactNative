import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import NewsPage from './src/tutorials/HttpClientComponent';
import ListViewPage from './src/tutorials/ListComponent';
import { Ionicons } from '@expo/vector-icons';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { initializeApp } from 'firebase/app';
import { firebaseCofig } from './src/helper/Constants';
import DishesScreen from './src/screens/DishesScreen';
import AppHomeScreen from './src/screens/HomeScreen';
import { getAuth } from '@firebase/auth';
import CounterComponent from './src/tutorials/CounterComponent';
import { Appbar } from 'react-native-paper';
import CartScreen from './src/screens/CartScreen';
import LocationScreen from './src/screens/LocationScreen';
import MapViewScreen from './src/screens/MapViewScreen';


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

function OldApp(){
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
  splash: {
    flex: 1,
    // Make the backgroud as a gradient color
    backgroundColor: '#aed',
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
  }
});

const MyAppBar = ({navigation}) => (
  <Appbar>
   <Appbar.Action
     icon="bell"
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="cart"
      onPress={() => navigation.navigate("Home")}
    />
  </Appbar>
);

export default function App({navigation}){

  const [showSplash, setShowSplash] = useState(true);

  useEffect( ()=>{

    
    // local function
    async function showSplashScreen(){
      try{
        initializeApp(firebaseCofig);
        // Check if the user is logged in or not
        const auth = getAuth();
        if(auth.currentUser != null){
          console.log("user is logged in already");
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }catch(error){
        console.log("Something Went Wrong: "+error);
      }finally{
        setShowSplash(false);
      }
    }

    showSplashScreen();
    
  }, [] );

  if(showSplash){
    return (
      <View style={styles.splash}>
          <Ionicons name="md-heart-circle-sharp" size={32} color="green"/>
          <Text>Health Logger</Text>
      </View>
    );
  }

  return(
      <NavigationContainer>
       {/* <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}> */}
       <Stack.Navigator initialRouteName="Maps" >
       <Stack.Screen name="AppBar" component={MyAppBar}/>
       <Stack.Screen name="Maps" component={MapViewScreen}/>
       <Stack.Screen name="Location" component={LocationScreen}/>
        <Stack.Screen name="Signin" component={SignInScreen} options={{title:"Sign In"}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{title:"Register"}}/>
        <Stack.Screen name="Home" component={AppHomeScreen} options={{
          title:"Home",
          headerRight: ()=>(
            // <Text>Cart</Text>
            
            <Appbar.Action
              icon="cart"
              onPress={() => navigation.navigate("Home")}
            />

          )
          }}/>
        <Stack.Screen name="Dishes" component={DishesScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Counter" component={CounterComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}