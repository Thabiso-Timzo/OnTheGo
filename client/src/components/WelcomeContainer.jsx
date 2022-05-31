import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

// Import StylesSheet
import styles from "../styles/welcomeScreenStyleSheet";

// Import Top bar navigation
import AgreementTap from "../navigation/AgreementPageNavigation";

const WelcomeContainerScreen = () => {

    // using react navigation
    const {navigate} = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Profile')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text></Text>
            <AgreementTap />
        </View>
    );
}

export default WelcomeContainerScreen;