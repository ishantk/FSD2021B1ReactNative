import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CounterComponent() {

    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                var current = count;
                setCount(++current);
            }}>
                <Text style={{fontSize: 16, color:'#000', marginLeft:8}}>+</Text>
            </TouchableOpacity>
            
            <Text style={{fontSize: 16, color:'#000', marginLeft:8}}>{count}</Text>

            <TouchableOpacity onPress={()=>{
                var current = count;
                if(count > 0){
                    setCount(--current);
                }
            }}>
                <Text style={{fontSize: 16, color:'#000', marginLeft:8, marginRight:8}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    margin: 24,
      maxHeight: 32,  
      maxWidth: 80,
     borderWidth: 1,
     borderRadius: 30,
      borderColor: 'gray',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
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
  });
