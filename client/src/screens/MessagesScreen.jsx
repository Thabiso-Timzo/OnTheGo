import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from '../styles/messagesStyleSheet';
import StreamMessages from '../components/StreamMessages';

const MessagesScreen = () => {
    const {navigate} = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.direction}>
                <TouchableOpacity style={styles.Arrowbutton} onPress={() => navigate('Request')}>
                    <View style={styles.arrow}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.windows} onPress={() => navigate('Request')}>
                    <FontAwesome name="windows" size={40} color="blue" />
                </TouchableOpacity>
            </View>
            <Image style={styles.header} source={require('../../assets/images/header.png')} />
            <StreamMessages />
        </View>
    );
}

export default MessagesScreen;