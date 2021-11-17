import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";

const Item = ( {itemData} ) => (
    <View style={styles.item}>
        <Image source={{uri: itemData.urlToImage}} style={styles.image}/>
        <Text style={styles.title}>{itemData.title}</Text>
        <Text style={styles.subTitle}>{itemData.author}</Text>
    </View>
);

function NewsPage(){

    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31c21508fad64116acd229c10ac11e84";
    const [news, setNews] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(true);

    const getNewsFromNewsAPI = async () => {
        try{
                const responseFromServer = await fetch(url);
                const jsonData = await responseFromServer.json();
                console.log(jsonData);
                console.log("Status: "+jsonData['status']);
                console.log("Articles Array: "+jsonData['articles']);
                setNews(jsonData['articles']);
                setActivityIndicator(false);
        }catch(error){
            console.error("Something Went Wrong: "+error);
        }
    }

    useEffect(() => {
        getNewsFromNewsAPI();
    }, []);

    const renderItem = ( { item } ) => <Item itemData={item}/>

    return (
        <View>
            { activityIndicator ? <ActivityIndicator/> : 
             <FlatList data={news} renderItem={renderItem}/>
            }
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
      color: "#000"
    },
    subTitle:{
      fontSize: 12,
      color: "##055"
    }
  });

export default NewsPage;


