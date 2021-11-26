import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'

export default function LocationScreen() {

    const [location, setLocation] = useState(null);
    const [message, setMessage] = useState("");

    let progress = "Fetching Location....";

    useEffect(
        ()=> {

            ( async () => {
                // Lets check for location permission on the foreground
                let status = Location.requestForegroundPermissionsAsync();
                let permissionsGranted = (await status).granted;
                console.log("Status of Permissions is: "+permissionsGranted);
                if(!permissionsGranted){
                    console.log("Please grant permissions first");
                    setMessage("No permissions to access location. Please grant in Settings");
                    return;
                }


                let fetchedLocation = await Location.getCurrentPositionAsync({});
                setMessage("Location Fetched");
                console.log("Location Fetched "+fetchedLocation);
                
                setLocation(fetchedLocation);
            })();
        }, [] );
        
        if(message != ""){
            progress = message;
        }

        if(location){ // if location is not null
            progress = JSON.stringify(location); // Data of Location as Latitude and Longiture with some other details
        }

    return (
        <View>
            <Text>Location Demo</Text>
            <Text>{progress}</Text>
        </View>
    )
}
