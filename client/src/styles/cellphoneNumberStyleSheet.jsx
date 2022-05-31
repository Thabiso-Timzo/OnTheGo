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
        marginBottom: '20%',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
    input: {
        flex: 1,
        height: 40
    },
    miniText: {
        marginLeft: '5%',
        marginTop: '135%',
        fontWeight: '300',
        fontSize: 20,
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: '5%',
        marginTop: '1%',
        marginBottom: '1%'
    },
    direction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightWhite,
        borderWidth: 0.5,
        borderColor: Colors.lightWhite,
        height: 50,
        borderRadius: 5,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        elevation: 8
    },
    image: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        margin: 5,
        height: 45,
        width: 45,
        resizeMode: 'stretch',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Colors.babyBlue,
        color: Colors.babyBlue
    },
    buttonDisabled: {
        padding: 10,
        margin: 5,
        height: 45,
        width: 45,
        resizeMode: 'stretch',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Colors.grey,
        color: Colors.grey
    },
    facebook: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%',
    },
    login: {
        color: Colors.grey,
        //backgroundColor: Colors.grey,
        fontSize: 18
    },
    facebookText: {
        color: Colors.navyBlue,
        //backgroundColor: Colors.navyBlue,
        fontSize: 18
    }
});

export default styles;