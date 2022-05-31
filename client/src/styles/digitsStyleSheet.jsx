import {StyleSheet, Platform} from 'react-native';
import Colors from '../theme/Colors';

export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = Colors.lightWhite;
export const NOT_EMPTY_CELL_BG_COLOR = Colors.cell;
export const ACTIVE_CELL_BG_COLOR = Colors.cellBgColor;

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    /*shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

     Android
    */elevation: 1,
  },

  // =======================

  root: {
    marginTop: -30
  },  
  nextButton: {
    marginTop: -48,
    marginLeft: '85%',
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.babyBlue,
    color: Colors.babyBlue,
    elevation: 3
  },
  nextButtonText: {
    marginTop: 11,
    textAlign: 'center',
    fontWeight: '700',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightWhite,
    borderWidth: 0.5,
    borderColor: Colors.lightWhite,
    height: 55,
    borderRadius: 5,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
    elevation: 8
  }
});

export default styles;