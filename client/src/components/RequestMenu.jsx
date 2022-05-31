import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../theme/Colors';

const RequestMenu = () => {
    const {navigate} = useNavigation();
  return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
            <View style={styles.thirdContainer}>
                <Icon 
                    style={styles.location}
                    name="location-pin" 
                    size={24} 
                    color="cyan"
                />
                <Text style={styles.text}>Where to?</Text>
                <AntDesign name="clockcircleo" size={24} color="cyan" />
                <TouchableOpacity onPress={() => navigate('RideMap')}>
                    <Text style={styles.text}>Now</Text>
                </TouchableOpacity>
                <Icon 

                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
    },
    secondContainer: {
       // padding: 20,
        //marginTop: '1%',
        //marginBottom: '1%',
        height: 150,
        borderRadius: 5,
        color: Colors.lightWhite,
        backgroundColor: Colors.lightWhite,
        elevation: 5
    },
    thirdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        paddingVertical: 15,
        borderRadius: 5,
        color: Colors.grey,
        backgroundColor: Colors.grey
    },
    location: {
        marginLeft: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
});

export default RequestMenu;
