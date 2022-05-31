import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';

import { mapStyle } from '../theme/mapStyle';
import styles from '../styles/requestRideStyleSheet';
import {carsAround} from '../components/data';
import RequestMenu from '../components/RequestMenu';

const RequestRideScreen = () => {
    const {navigate} = useNavigation();
    const [latLong, setLatLong] = useState({});
    
    // Check for permission from expo location 
    const checkPermission = async () => {
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if (hasPermission.status === 'granted') {
            const permission = await askPermission();
            return permission;
        }
        return true;
    };

    // Ask for permmision from the expo location
    const askPermission = async () => {
        const permission = Location.requestForegroundPermissionsAsync();
        return permission.status === 'granted';
    };

    // Get the user's location
    const getLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const {
                coords: {latitude, longitude}
            } = await Location.getCurrentPositionAsync();
            setLatLong({latitude: latitude, longitude: longitude});
        } catch(err) {
            console.log(err);
        }
    }

    const _map = useRef(1);

    useEffect(() => {
        checkPermission();
        getLocation();
        //console.log(latLong)
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Arrowbutton} onPress={() => navigate('Request')}>
                <View style={styles.arrow}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <MapView
                ref={_map}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                customMapStyle={mapStyle}
                showUserLocation={true}
                followsUserLocation={true}
                initialRegion={{
                    ...carsAround[0], 
                    latitudeDelta:0.008, 
                    longitudeDelta:0.008
                }}
            >
                {carsAround.map((item, index) => 
                    <MapView.Marker coordinate={item} key={index.toString()}>
                        <Image 
                            source={require('../../assets/images/carMarker.png')} 
                            style={styles.carsAround}
                            resizeMode="cover"
                        />
                    </MapView.Marker>
                    )
                }
            </MapView>
            <RequestMenu />
        </View>
    );
}

export default RequestRideScreen;