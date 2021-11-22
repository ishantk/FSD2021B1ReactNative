import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DishesScreen({route, navigation}){

    const {name, docId} = route.params;

    const Item = ( {itemData} ) => (
        <View style={styles.item}>
            <TouchableOpacity
                onPress = { () =>{
                    
                }
            }
            >
                <Image source={{uri: itemData.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{itemData.name}</Text>
                <Text style={styles.subTitle}>{itemData.price}</Text>
            </TouchableOpacity>
        </View>
    );

    const [dishes, setDishes] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(true);
    const db = getFirestore();

    const getRestaurantsFromFirebase = async () => {
        try{
                const path = "restaurants/"+docId+"/dishes";
                const documents = [];
                const querySnapshot = await getDocs(collection(db, path));
                // Write an array and add the documents in it
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                     console.log(doc.id, " => ", doc.data());
                     const docData = doc.data();
                     docData['docId'] = doc.id;
                     documents.push(docData);
                });
                setDishes(documents);
                setActivityIndicator(false);
        }catch(error){
            console.error("Something Went Wrong: "+error);
        }
    }

    useEffect(() => {
        getRestaurantsFromFirebase();
    }, []);

    const renderItem = ( { item } ) => <Item itemData={item}/>

    return (
        <View>
            { activityIndicator ? <ActivityIndicator/> : 
             <FlatList data={dishes} renderItem={renderItem}/>
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


