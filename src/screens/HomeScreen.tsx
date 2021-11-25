import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';


function AppHomeScreen({navigation}){

    const Item = ( {itemData} ) => (
        <View style={styles.item}>
            <TouchableOpacity
                onPress = { () =>{
                    //navigation.navigate("Dishes", {data: itemData});
                    navigation.navigate("Dishes", {name: itemData.name, 
                        docId: itemData.docId});
                }
            }
            >
                <Image source={{uri: itemData.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{itemData.name}</Text>
                <Text style={styles.subTitle}>{itemData.city}</Text>
            </TouchableOpacity>
        </View>
    );

    const [restaurants, setRestaurants] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(true);
    const db = getFirestore();

    const getRestaurantsFromFirebase = async () => {
        try{
                const documents = [];
                const querySnapshot = await getDocs(collection(db, "restaurants"));
                // Write an array and add the documents in it
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                     console.log(doc.id, " => ", doc.data());
                     const docData = doc.data();
                     docData['docId'] = doc.id;
                     documents.push(docData);
                });
                setRestaurants(documents);
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
            {/* <Appbar>
              <Appbar.Action
                icon="bell"
                onPress={() => console.log('Pressed archive')}
                />
                <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action
                  icon="cart"
                  onPress={() => navigation.navigate("Cart")}
                />
              </Appbar> */}

            { activityIndicator ? <ActivityIndicator/> : 
             <FlatList data={restaurants} renderItem={renderItem}/>
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

export default AppHomeScreen;


