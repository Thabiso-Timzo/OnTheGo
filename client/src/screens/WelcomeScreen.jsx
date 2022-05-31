import React from "react";
import { Text, TouchableOpacity, ImageBackground, View } from "react-native"
import { useNavigation } from '@react-navigation/native'

// Import Styles
import styles from "../styles/welcomeStyleSheet";

const WelcomeScreen = () => {
    const {navigate} = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../assets/images/firstPage.png')}>
                <TouchableOpacity style={styles.button} onPress={() => {navigate('CellPhone')}}>
                    <Text style={styles.getStarted}>Get  Started</Text>
                </TouchableOpacity>     
            </ImageBackground>
        </View>
    );
}

export default WelcomeScreen;