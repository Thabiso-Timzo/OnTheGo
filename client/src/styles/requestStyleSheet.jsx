import { StyleSheet, Dimensions } from "react-native";
import Colors from "../theme/Colors";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        color: Colors.black,
        backgroundColor: Colors.black
    },
    image: {
        marginLeft: 30,
        marginTop: -10,
        width: 40,
        height: 40
    },
    items: {
        flexDirection: 'row',
        padding: 15,
        marginTop: '5%',
        marginBottom: '2%'
    },
    greetings: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.lightWhite
    },
    profileView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    profilePicture: {
        marginLeft: '3%',
        borderRadius: 50,
        borderWidth: 40,
        borderColor: Colors.grey,
    },
    userName: {
        marginTop: -30,
        marginLeft: '3%',
        fontWeight: "bold",
        fontSize: 38,
        color: Colors.lightWhite
    },
    userBelongings: {
        flexDirection: 'row'
    },
    message: {
        marginTop: -20,
        marginLeft: '58%',
        marginRight: '3%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.lightWhite,
        height: 30,
    },
    blueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 35,
        marginLeft: '10%',
        marginRight: '20%',
        borderRadius: 20,
        color: Colors.navyBlue,
        backgroundColor: Colors.navyBlue,
        height: 30,
        width: '65%',
    },
    driver: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.lightWhite,
    },
    trips: {
        marginTop: 20,
        marginLeft: '3%',
        marginRight: '3%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 150,
        //width: '85%',
        elevation: 17
    },
    tripHistory: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.lightWhite
    },
    tripCar: {
        marginTop: -7,
        marginLeft: '-0%',
        borderRadius: 20,
        height: '80%',
        width: '100%'
    },
    request: {
        marginTop: 20,
        marginLeft: '3%',
        marginRight: '3%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 150,
        //width: '85%',
        elevation: 17
    },
    requestText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.lightWhite
    },
    requesCar: {
        marginTop: -7,
        marginLeft: '-0%',
        borderRadius: 20,
        height: '80%',
        width: '100%'
    },
    schedule: {
        marginTop: 20,
        marginLeft: '3%',
        marginRight: '3%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 150,
        //width: '95%',
        elevation: 17
    },
    scheduleText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.lightWhite
    },
    icon: {
        marginTop: '20%',
        marginLeft: '5%'
    },
    rowViews: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
    },
    payment: {
        marginTop: 20,
        marginLeft: '5%',
        marginRight: '-2%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 130,
        width: 130,
        elevation: 17
    },
    gifts: {
        marginTop: 20,
        marginLeft: '-0%',
        marginRight: '-4%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 130,
        width: 130,
        elevation: 17
    },
    help: {
        marginTop: 20,
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20,
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey,
        height: 130,
        width: 130,
        elevation: 17
    },
    moneyIcon: {
        alignSelf: 'center'
    },
    payAmount: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.lightWhite
    },
    paymentErrow: {
        marginTop: 23,
        marginLeft: '20%'
    },
    giftsPromo: {
        marginTop: 50,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.lightWhite
    },
    infoIcon: {
        paddingTop: '5%',
        alignSelf: 'center'
    },
    helpText: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.lightWhite 
    },
    termsConditions: {
        alignSelf: 'center',
        marginTop: '20%',
        color: Colors.lightWhite,
        fontSize: 16,
        fontWeight: 'bold'    
    },
    vision: {
        alignSelf: 'center',
        marginTop: '1%',
        color: Colors.grey,
        fontSize: 12
    },
    horizontaltext: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.lightWhite
    },
    tx: {
        color: Colors.darkGrey,
        backgroundColor: Colors.darkGrey
    }
});

export default styles;