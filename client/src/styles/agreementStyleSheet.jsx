import { StyleSheet, Dimensions } from "react-native";
import Colors from "../theme/Colors"; 

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        color: Colors.container,
        backgroundColor: Colors.container
    },
    SecondContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        backgroundColor: Colors.lightWhite,
        borderWidth: 0.5,
        borderColor: Colors.lightWhite,
        height: '70%',
        borderRadius: 5,
        elevation: 5
    },
    PageTitle: {
        marginTop: '5%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    paragraphOne: {
        marginTop: '5%',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 14
    },
    paragraphTwo: {
        marginTop: '5%',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 14
    },
    paragraphTree: {
        marginTop: '5%',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 14
    },
    paragraphFour: {
        marginTop: '5%',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 14
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: '20%'
    },
    denyButton: {
        color: Colors.container,
        backgroundColor: Colors.container,
        borderColor: Colors.babyBlue,
        borderWidth: 2,
        elevation: 5,
        borderRadius: 8,
        height: '110%',
        width: '20%',
    },
    denyText: {
        padding: 10,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.black  
    },
    acceptButton: {
        color: Colors.babyBlue,
        backgroundColor: Colors.babyBlue,
        borderColor: Colors.babyBlue,
        borderWidth: 2,
        elevation: 5,
        borderRadius: 8,
        height: '110%',
        width: '20%',
    },
    acceptText: {
        padding: 10,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.lightWhite,
    },
    pageBlock: {
        paddingTop: '5%'
    }
});

export default styles;