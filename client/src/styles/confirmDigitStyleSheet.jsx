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
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
    digitTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    phoneText: {
        marginLeft: '5%',
        marginTop: '135%',
        fontSize: 18,
        fontWeight: 'normal'
    },
    editText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.navyBlue,
    },
    direction1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: '1%',
    },
    direction2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: '8%',
    },
    resend: {
        fontSize: 14
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default styles