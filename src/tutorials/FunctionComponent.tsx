import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// Function Component with State Management

export default function MyFunctionApp() {

  const quotes = ["Be Exceptional", "Work Hard, Be Successfull", 
  "Search the candle rather than cursing the darkness"];
  const [idx, setIndex] = useState(0);
  const [message, setMessage] = useState("Hello, This is John");
  var i = idx;

   if(i==2){
     i=0;
   }

  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text>{message}</Text>
      <Text style={styles.textStyle}>{quotes[i]}</Text>
      {/* Instead of setIndex just increment i and check if ui update happens or not */}
       <Button title="Next Quote" onPress = {(event) => setIndex(++i)}></Button>
    </View>
  );

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
