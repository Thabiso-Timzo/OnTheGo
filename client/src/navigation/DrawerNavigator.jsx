import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import RequestScreen from '../screens/RequestScreen'

// Import Screen's title
import { Request } from "../constants/routerNames";

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();

    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name={Request} component={RequestScreen}></DrawerStack.Screen>
        </DrawerStack.Navigator>
    )
};

export default DrawerNavigator;