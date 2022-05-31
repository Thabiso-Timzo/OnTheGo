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
    button: {
        paddingTop: 40,
        paddingLeft: '5%'
    },
    title: {
        padding:10,
        paddingLeft: '5%',
        fontSize: 30,
        fontWeight: 'bold'
    },
    name: {
        paddingLeft: '5%',
        paddingTop: 15,
        fontSize: 18
    },
    inputName: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 2,
        borderColor: Colors.black,
        borderRadius: 5,
        height: 50
    },
    email: {
        marginLeft: '5%',
        paddingTop: 40,
        fontSize: 18
    },
    emailInput: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 2,
        borderColor: Colors.black,
        borderRadius: 5,
        height: 50
    },
    SaveButton: {
        marginTop: 50,
        marginLeft: '20%',
        marginRight: '80%',
        height: '15%',
        width: '60%',
        borderRadius: 5,
        backgroundColor: Colors.babyBlue,
        color: Colors.babyBlue
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.lightWhite
    }
});

export default styles;
