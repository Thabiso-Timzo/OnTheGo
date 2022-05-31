import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 

// Import StyleSheet
import styles from "../styles/creatProfileStyleSheet";
import { TextInput } from "react-native-gesture-handler";

const CreatProfileScreen = () => {

    // using react navigation
    const {navigate} = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigate('Code')}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Create Profile</Text>
            <View>
                <Text style={styles.name}>Name</Text>
                <TextInput 
                    style={styles.inputName}
                />
                <Text style={styles.email}>Email</Text>
                <TextInput 
                    style={styles.emailInput}
                />
                <TouchableOpacity style={styles.SaveButton} onPress={() => {navigate('WelcomeContainer')}}>
                    <Text style={styles.buttonText}>Save & Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CreatProfileScreen;