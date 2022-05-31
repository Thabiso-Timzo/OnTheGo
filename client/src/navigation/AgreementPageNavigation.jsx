import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Import screens
import AgreementPage from "../screens/AgreementScreen";
import TermOfUSeScreen from "../screens/TermsOfUseSreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";

const Tab = createMaterialTopTabNavigator();

const AgreementTap = () => {
    return (
        <Tab.Navigator
            initialRouteName="Terms & Conditions"
            screenOptions={{
                activeTinColor: "white",
                tabBarLabelStyle: { fontSize: 10 },
                tabBarStyle: { backgroundColor: 'White' }
            }}
        >
            <Tab.Screen 
                name="Terms & Conditions" 
                component={AgreementPage} 
                screenOptions={{ tabBarLabel: "Terms & Conditions"}}
            />
            <Tab.Screen 
                name="Terms of Use" 
                component={TermOfUSeScreen} 
                screenOptions={{  tabBarLabel: "Terms of Use"}}    
            />
            <Tab.Screen 
                name="Privacy Policy" 
                component={PrivacyPolicyScreen}
                screenOptions={{  tabBarLabel: "Privacy Policy" }} 
            />
        </Tab.Navigator>
    );
}

export default AgreementTap;