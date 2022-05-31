import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

// importing stylesheet
import styles from "../styles/cellphoneNumberStyleSheet";

// Facebook id
const APP_ID = 316938436879864

const CellPhoneNumberScreen = () => {
    // Initial state
    const [cellPhone, setCellPhone] = useState(0);

    // using react navigation
    const {navigate} = useNavigation();

    // Enable and Disabled Button
    const SubmitButton = (cellPhone) => {
        if (cellPhone){
            return (
                <TouchableOpacity style={styles.button} onPress={() => {navigate('Code')}}>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            );
            
        } else {
            return (
                <TouchableOpacity style={styles.buttonDisabled} disabled>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            );
        }
    }

    return (
        <View style={styles.container}> 
            <ImageBackground style={styles.background} source={require('../../assets/images/solid.png')}>
                <Text style={styles.miniText}>Hello, nice to meet you</Text>
                <Text style={styles.bigText}>Enter your mobile number to continue</Text>
                <View style={styles.direction}>  
                    <Image style={styles.image} source={require('../../assets/images/southAfricanFlag.png')}/>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter your cell phone number"
                        onChangeText={(number) => setCellPhone(number)}
                        value={cellPhone.toString()}
                        keyboardType="numeric"
                        maxLength={13}
                    />
                    <SubmitButton />
                </View>
                <View style={styles.facebook}>
                    <Text style={styles.login}>Or login with</Text>
                    <TouchableOpacity /*onPress={}*/>
                        <Text style={styles.facebookText}> facebook</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default CellPhoneNumberScreen;