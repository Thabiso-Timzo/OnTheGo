import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Import StyleSheet
import styles from "../styles/agreementStyleSheet";

const AgreementPage = () => {
    // using react navigation
    const {navigate} = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.SecondContainer}>
                <ScrollView>
                    <Text style={styles.PageTitle}>Data and content you provide to us</Text>
                    <Text style={styles.paragraphOne}>
                        We collect your location if you enabled it,and other information you provide to us 
                        and our platform automatically process the content to help emergency channels easy to 
                        see where you at so they can respond to your query  but your information is not visible 
                        to any user in the application or events happened to you. 
                    </Text>
                    <Text style={styles.paragraphTwo}>
                        We save your reports on our cloud database for SAPS when they want to file an investigation 
                        in case SAPS lost your data due to network connections.
                    </Text>
                    <Text style={styles.paragraphTree}>
                        We also receive data about which peope(s) added you as their close person to contact if 
                        incident happens to you vice versa
                    </Text>
                    <Text style={styles.paragraphFour}>
                        When you requested emergency help the in the app it only alerts emergency channels 
                        not people(s) in the app and no one sees your activity in the app and the app is data 
                        free but when you have data it uses your data.
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.denyButton} onPress={() => navigate('Welcome')}>
                    <Text style={styles.denyText}>Deny</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptButton} onPress={() => navigate('Request')}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AgreementPage;