import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


// Assignment: Create Navigation for Images with Next and Previous Buttons
export default class App extends Component{

  idx = 0;
  quotes = ["Be Exceptional", "Work Hard, Be Successfull", 
  "Search the candle rather than cursing the darkness"];
  
  state = {
    quote: this.quotes[this.idx]
  }

  onButtonPressed = () =>{
    this.idx++; 

    if(this.idx == 2){
      this.idx = 0;
    }

    this.setState(
      {
        quote: this.quotes[this.idx]
      }
    );
  }

  render(){
    return(
        <View style={styles.container}>
        <StatusBar style="auto"/>
        <Text style={styles.textStyle}>{this.state.quote}</Text>
        {/* Instead of setIndex just increment i and check if ui update happens or not */}
        <Button title="Next Quote" onPress = {this.onButtonPressed}></Button>
      </View>
    );
  }
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
