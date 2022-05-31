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
    secondContainer: {
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
    article: {
        marginTop: '3%',
        marginLeft: '5%',
        fontSize: 30,
        fontWeight: 'normal'
    },
    paragraphOne: {
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 14
    },
    paragraphTwo: {
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 14
    },
    paragraphThree: {
        marginTop: '3%',
        marginLeft: '10%',
        marginRight: '5%',
        fontSize: 14
    },
    privacy: {
        marginTop: '10%',
        marginLeft: '5%',
        fontSize: 18
    }
});

export default styles;