import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Octicons, AntDesign, Feather, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

// import styleSheet
import styles from "../styles/requestStyleSheet";

const data = [
    {
        id: "1",
        title: "Payments",
        icon: <Ionicons name="md-card" size={40} color="blue" />,
        screen: "Payment",
        arrowIcon: <Entypo name="controller-play" size={24} color="grey" />
    },
    {
        id: "2",
        title: "Gifts & Promo",
        icon: <FontAwesome5 name="gift" size={35} color="blue" />,
        screen: "Gift",
        arrowIcon: <Entypo name="controller-play" size={24} color="grey" />
    },
    {
        id: "3",
        title: "Help",
        icon: <Entypo name="info-with-circle" size={35} color="blue" />,
        screen: "Help",
        arrowIcon: <Entypo name="controller-play" size={24} color="grey" />
    }
]

const RequestScreen = () => {
    const [greet, setGreet] = useState(''); 
    const {navigate} = useNavigation();

    // Greetings according to time in hours
    const findGreet = () => {
        const hrs = new Date().getHours();
        if (hrs === 0 || hrs < 12) return setGreet('Morning');
        if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
        setGreet('Evening');
    }

    // Weather images accounding to time in hours
    const BackgroundImage = () => {
        const hours = new Date().getHours();
        if (hours === 0 || hours < 12) {
            return (<Image style={styles.image} source={require('../../assets/images/morning.png')} />);
        } else if (hours === 1 || hours < 17) {
            return (<Image style={styles.image} source={require('../../assets/images/afternoon.png')} />);
        } else {
            return (<Image style={styles.image} source={require('../../assets/images/night.png')} />);
        }
    }

    useEffect(() => {
        findGreet();
    }, []);

    return (
        <View style={styles.container}> 
            <View style={styles.items}>
                <Text style={styles.greetings}>{`Good ${greet}!`}</Text>
                <BackgroundImage />
            </View>
            <View style={styles.userBelongings}>
                <Text style={styles.userName}>Thabiso</Text>
                <TouchableOpacity style={styles.message} onPress={() => navigate('Messages')}>
                    <AntDesign name="message1" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.profileView}>
                <Image style={styles.profilePicture} />
                <View style={styles.blueContainer}>
                    <Text style={styles.driver}>Do you want to be a driver?</Text>
                    <TouchableOpacity style={styles.arrow}>
                        <Entypo name="controller-play" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => navigate('History')}>
                    <View style={styles.trips}>
                        <Text style={styles.tripHistory}>Your Trips History</Text>
                        <Image style={styles.tripCar} source={require('../../assets/images/trip.png')} /> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Ride')}>
                    <View style={styles.request}>
                        <Text style={styles.requestText}>Requests A Ride</Text>
                        <Image style={styles.requesCar} source={require('../../assets/images/request.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.schedule}>
                        <Text style={styles.scheduleText}>Scheduled Ride(s)</Text>
                        <View style={styles.icon}>
                            <Entypo name="controller-play" size={24} color="grey" />
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList 
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={styles.tx, tw`p-2 pl-6 pb-8 pt-4 rounded-md m-2 w-40`}
                            onPress={() => navigate(item.screen)}
                        >
                            <View style={{ padding: 20, alignSelf: 'center' }}>
                                {item.icon}
                            </View>
                            <Text style={styles.horizontaltext}>{item.title}</Text>
                            <Icon 
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name="arrowright"
                                color="white"
                                type="antdesign"
                            />
                        </TouchableOpacity>
                    )}
                />
                <View>
                    <Text style={styles.termsConditions}>Terms & Conditions</Text>
                    <Text style={styles.vision}>v2.111456</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default RequestScreen;