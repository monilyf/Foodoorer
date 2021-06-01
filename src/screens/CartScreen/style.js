import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  container: {
    backgroundColor:Color.WHITE_SMOKE,
    paddingHorizontal:20,
    borderBottomLeftRadius:18,
    borderBottomRightRadius:18,
    paddingBottom:10,
    // flex:1
  },
 
  divider:{
    width: '100%',
    borderWidth: 0.2,
    borderColor: Color.DARK_GRAY,
    marginTop: 10,
  },
  addressView:{
  alignSelf: 'center',
  marginTop:20,
  width: '100%',
  paddingHorizontal: 20,
  paddingVertical: 20,
  backgroundColor: Color.WHITE,
  borderTopStartRadius: 18,
  borderTopEndRadius: 18,
  // paddingBottom:40
  }
});

export default styles;
