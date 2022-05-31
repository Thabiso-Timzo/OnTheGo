import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
            <AuthStack.Screen name="Register" component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
};

export default AuthNavigator;