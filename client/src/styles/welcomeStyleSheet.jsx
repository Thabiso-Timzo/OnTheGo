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
    background: {
        flex: 1,
        padding: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    getStarted: {
        padding: 10,
        textAlign: "center",
        color: Colors.navyBlue,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        //fontFamily: "Sen",
    },
    button: {
        //margin: '175%',
        marginTop: '175%',
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: Colors.lightWhite,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        width: 295,
        height: 50,
        alignSelf: 'center',
    }
});

export default styles;