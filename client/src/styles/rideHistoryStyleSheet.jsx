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
        backgroundColor: Colors.container
    },
    button: {
       
    },
    buttonWrapper: {
        marginTop: 50,
        marginLeft: '10%',
        borderRadius: 50,
        borderWidth: 0.5,
        height: 45,
        width: 45,
        color: Colors.grey
    }
});

export default styles;