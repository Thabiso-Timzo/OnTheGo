import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
//import DrawerNavigator from './DrawerNavigator';

const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <HomeNavigator /> 
        </NavigationContainer>
    );
}

export default AppNavigationContainer;