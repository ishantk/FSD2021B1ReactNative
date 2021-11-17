import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";

// Hard Coded Data Structure
const covidData = [
    {
        id: 1,
        state: "Maharashtra",
        confirmed: 165241,
    },
    
    {
        id: 2,
        state: "Punjab",
        confirmed: 5241,
    },

    {
        id: 3,
        state: "Himachal",
        confirmed: 1241,
    },

    {
        id: 4,
        state: "Karnataka",
        confirmed: 65241,
    },

    {
        id: 5,
        state: "Delhi",
        confirmed: 3212,
    },
];

const Item = ( {itemData} ) => (
    <View style={styles.item}>
        <Text style={styles.title}>{itemData.state}</Text>
        <Text style={styles.subTitle}>{itemData.confirmed}</Text>
    </View>
);

function ListViewPage(){

    const renderItem = ( { item } ) => <Item itemData={item}/>

    return (
        <View>
            <FlatList data={covidData} renderItem={renderItem}/>
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

export default ListViewPage;


