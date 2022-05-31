import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../theme/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        color: Colors.container,
        backgroundColor: Colors.lightGrey
    },
    Arrowbutton: {
        marginTop: 35,
        marginLeft: '3%',
        borderRadius: 50,
        width: 50,
        height: 50,
        //elevation: 5
    },
    arrow: {
        padding: 10
    },
    direction: {
        flexDirection: 'row'
    },
    windows: {
        marginTop: 35,
        marginLeft: '70%',
        marginRight: '3%',
        //elevation: 5
    },
    header: {
        marginTop: 3,
        width: '100%',
        height: null,
        aspectRatio: 4.8,
        //elevation: 5
    }
});

export default styles;