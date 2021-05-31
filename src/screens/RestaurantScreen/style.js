import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'
import ThemeUtils from '../../utils/ThemeUtils'

const styles = StyleSheet.create({
  container: {
    backgroundColor:Color.TRANSPARENT,
    marginHorizontal:20,
    // height:'80%',
    height:650,
    marginTop:-80,
    position:'relative',
    borderRadius:6,
    
  },
  header:{
   
    flexDirection:'row',
    justifyContent:'space-between',
  
    bottom:163,

    marginHorizontal:20
  },
  infoContainer:{
    // bottom: 90,
    alignSelf: 'center',
    // position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 6,

  },
  rowContainer:{
    flexDirection:'row',
  },
  divider:{
    width:ThemeUtils.relativeWidth(50)
  },
  checkoutModal:{
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Color.BOX_BG,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
  }
 
});

export default styles;
