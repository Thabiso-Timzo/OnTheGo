import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles/rideHistoryStyleSheet';

const RideHistoryScreen = () => {
     const {navigate} = useNavigation();
    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.button} onPress={() => navigate('Request')}>
                <View style={styles.buttonWrapper}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default RideHistoryScreen;