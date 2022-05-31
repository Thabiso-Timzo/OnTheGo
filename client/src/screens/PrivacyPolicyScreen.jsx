import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/privacyPolicyStyleSheet";

const PrivacyPolicyScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <ScrollView>
                    <Text style={styles.article}>Article 1</Text>
                    <Text style={styles.paragraphOne}>Who May Use the Services</Text>
                    <Text style={styles.paragraphTwo}>
                        When one door of happiness closes, another opens, but often we 
                        look so long at the closed door that we do not see the one that has
                        been opened for us. 
                    </Text>
                    <Text style={styles.paragraphThree}>
                        • Step 1: You may use the Services only if you agree to form a binding 
                        contract with us and are not a person barred from receiving services under 
                        the laws of the applicable jurisdiction.
                    </Text>
                    <Text style={styles.paragraphThree}>
                        • Step 2: Our Privacy Policy describes how we handle the information you 
                        provide to us when you use our Services.
                    </Text>
                    <Text style={styles.privacy}>Privacy</Text>
                    <Text style={styles.paragraphTwo}>
                        When one door of happiness closes, another opens, but often we look so 
                        long at the closed door that we do not see the one that has been opened for us. 
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}

export default PrivacyPolicyScreen;