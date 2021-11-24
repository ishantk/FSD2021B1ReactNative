import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doc, setDoc, deleteDoc, Timestamp } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export default function DishesScreen({route, navigation}){

    const {name, docId} = route.params;
    const [count, setCount] = useState(0);
    const auth = getAuth();
    const uid = auth.currentUser?.uid;
    const db = getFirestore();

    const Item = ( {itemData} ) => (
        <View style={styles.item}>
                <Image source={{uri: itemData.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{itemData.name}</Text>
                <Text style={styles.subTitle}>{itemData.price}</Text>
                <View style={styles.counterContainer}>
              <TouchableOpacity onPress={()=>{
                  var current = count;
                  setCount(++current);
                  console.log("count is: "+count+" uid is: "+uid);
                  
                  // Insert or Update Data
                  const documentToInsert = itemData;
                  documentToInsert['quantity'] = count;

                  setDoc(doc(db, "users/"+uid+"/cart", itemData.name), documentToInsert);

              }}>
                <Text style={{fontSize: 16, color:'#000', marginLeft:8}}>+</Text>
             </TouchableOpacity>
            
            <Text style={{fontSize: 16, color:'#000', marginLeft:8}}>{count}</Text>

            <TouchableOpacity onPress={()=>{
                var current = count;
                if(count > 0){
                    setCount(--current);
                    console.log("count is: "+count);

                     // Delete or Update Data
                     const documentToInsert = itemData;
                     documentToInsert['quantity'] = count;
                     setDoc(doc(db, "users/"+uid+"/cart", itemData.name), documentToInsert);
                }else{
                    deleteDoc(doc(db, "users/"+uid+"/cart", itemData.name));
                }
            }}>
                <Text style={{fontSize: 16, color:'#000', marginLeft:8, marginRight:8}}>-</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

    const [dishes, setDishes] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(true);

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
    counterContainer: {
      margin: 24,
        maxHeight: 32,  
        maxWidth: 80,
       borderWidth: 1,
       borderRadius: 30,
        borderColor: 'gray',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-end',
        justifyContent: 'space-between',
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


