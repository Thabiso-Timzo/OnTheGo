import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import WelcomeScreen from "../screens/WelcomeScreen";
import CellPhoneNumberScreen from "../screens/CellPhoneNumberScreen";
import Confirm4digitCodeScreen from "../screens/Confirm4digitCodeScreen";
import CreatProfileScreen from "../screens/CreateProfileScreen";
import WelcomeContainerScreen from "../components/WelcomeContainer";
import RequestScreen from "../screens/RequestScreen";
import MessagesScreen from "../screens/MessagesScreen";
import RideHistoryScreen from "../screens/RideHistoryScreen";
import RequestRideScreen from "../screens/RequestRideScreen";
import PaymentScreen from "../screens/PaymentScreen";
import GiftScreen from "../screens/GiftScreen";
import HelpScreen from "../screens/HelpScreen";
import MapScreen from "../screens/MapScreen";

// Import screen titles
import { 
    Welcome, 
    CellPhone, 
    Code, 
    Profile, 
    WelcomeContainer, 
    Request,
    Messages,
    History,
    Ride,
    Payment,
    Gift,
    Help,
    RideMap
    } from '../constants/routerNames';

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator 
            initialRouteName="Welcome" 
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name={Welcome} component={WelcomeScreen} />
            <HomeStack.Screen name={CellPhone} component={CellPhoneNumberScreen}/>
            <HomeStack.Screen name={Code} component={Confirm4digitCodeScreen}/>
            <HomeStack.Screen name={Profile} component={CreatProfileScreen}/>
            <HomeStack.Screen name={WelcomeContainer} component={WelcomeContainerScreen}/>
            <HomeStack.Screen name={Request} component={RequestScreen}/>
            <HomeStack.Screen name={Messages} component={MessagesScreen}/>
            <HomeStack.Screen name={History} component={RideHistoryScreen}/>
            <HomeStack.Screen name={Ride} component={RequestRideScreen}/>
            <HomeStack.Screen name={Payment} component={PaymentScreen}/>
            <HomeStack.Screen name={Gift} component={GiftScreen}/>
            <HomeStack.Screen name={Help} component={HelpScreen}/>
            <HomeStack.Screen name={RideMap} component={MapScreen}/>
        </HomeStack.Navigator>  
    )
};

export default HomeNavigator;