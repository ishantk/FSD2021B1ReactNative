import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

export default function MapViewScreen() {
    return (
        // Explore more of Maps on https://www.npmjs.com/package/react-native-maps
        <View style={styles.container}>
            <MapView 
            style = {styles.map}
            initialRegion={{
                latitude: 30.9024779,
                longitude: 75.8201934,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
});
