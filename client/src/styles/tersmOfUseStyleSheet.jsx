import { StyleSheet, Dimensions } from "react-native";
import Colors from "../theme/Colors";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        marginTop: 20,
        color: Colors.container,
        backgroundColor: Colors.container
    },
   cardContainer: {
       flexGrow: 1,
       marginLeft: '3%',
       marginRight: '3%'
   },
   card: {
       flexGrow: 1,
       alignItems: 'center',
       justifyContent: 'center',
   },
   heading: {
       fontSize: 16,
       fontWeight: 'bold',
       letterSpacing: -1
   },
   body: {
       fontSize: 14,
       lineHeight: 20 * 1.5,
       marginLeft: '5%',
       marginRight: '5%'
   },
   subCategoriesList: {
       marginTop: 30,
   }
});

export default styles;