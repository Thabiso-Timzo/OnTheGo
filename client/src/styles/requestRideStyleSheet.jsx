import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Arrowbutton: {
        marginTop: 35,
        marginLeft: '3%',
        borderRadius: 50,
        width: 50,
        height: 50
    },
    arrow: {
        padding: 10
    },
    buttomContainer: {
        marginTop: '135%',
        marginBottom: '1%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 5,
        //color: Colors.lightWhite,
        //backgroundColor: Colors.lightWhite,
        elevation: 10,
        height: 130
    },
    direction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexDirect: {
        flexDirection: 'row',
        marginTop: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        width: '93%',
        height: '100%',
        borderRadius: 5,
        //color: Colors.grey,
        //backgroundColor: Colors.grey,
    },
    location: {
        marginTop: 10,
        marginLeft: 10
    },
    whereTo: {
        fontSize: 25,
        fontWeight: '900',
        marginTop: 10,
        marginLeft: 15
    },
    clock: {
        marginTop: 20,
        marginLeft: -150
    },
    carsAround: {
        width: 28,
        height: 14,
    },
    
});

export default styles;