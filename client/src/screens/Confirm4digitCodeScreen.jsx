import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Import StyleSheet
import styles from '../styles/confirmDigitStyleSheet';
import ConfirmCode from '../components/ConfirmCode';

const Confirm4digitCodeScreen = () => {
    // using react navigation
    const {navigate} = useNavigation();

    return (
        <View style={styles.container}> 
            <ImageBackground style={styles.background} source={require('../../assets/images/solid.png')}>
                <Text style={styles.phoneText}>Phone number Verification</Text>
                <View style={styles.direction1}>
                    <Text style={styles.digitTitle}>4 digit code sent to, {/**fetch from the database */}</Text>
                    <TouchableOpacity onPress={() => navigate('CellPhone')}>
                        <Text style={styles.editText}>Edit</Text>    
                    </TouchableOpacity> 
                </View>
                <View>
                    <ConfirmCode />
                </View>
                <View style={styles.direction2}>
                    <Text style={styles.resend}>Resend Code in</Text>
                    <Text style={styles.bold}>10 seconds</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Confirm4digitCodeScreen