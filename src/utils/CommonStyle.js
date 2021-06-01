import {StyleSheet} from 'react-native';
import Color from './Color';
import ThemeUtils from './ThemeUtils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabScreen: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },

  boxContainer: {
    marginTop: 20,
    width: ThemeUtils.relativeWidth(95),
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Color.BOX_BG,
    borderRadius: 12,
    // alignSelf:'center'
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: Color.ERROR,
    fontStyle: 'italic',
    marginLeft: 23,
  },

  endLine: {
    borderWidth: 0.5,
    borderColor: Color.DARK_GRAY,
    marginVertical: 3,
    opacity: 0.3,
    marginHorizontal: 30,
  },
  shadowStyle: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.75,
    elevation: 5,
  },
  foodMark:{
    marginLeft:10,
    height: ThemeUtils.relativeHeight(2),
    width: ThemeUtils.relativeHeight(2),
    alignSelf:'center'
    // height:'30%',
    // width:'100%',
  },
  divider:{
    width: ThemeUtils.relativeWidth(12),
    borderWidth: 0.7,
    opacity: 0.3,
    borderColor: Color.DARK_GRAY,
    marginVertical: 10,
  },
  modalStyle:{
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Color.BOX_BG,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
  },
  
 
});

export default styles;
