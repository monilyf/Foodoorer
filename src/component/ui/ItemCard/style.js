import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.BOX_BG,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 6,
        marginRight:10,
        marginVertical:5,
      },
      imageContainer:{
        borderRadius: 6,
        height: ThemeUtils.relativeHeight(12),
        width: ThemeUtils.relativeWidth(22),
      },
      // foodMark:{
      //   marginLeft:20,
      //   height: ThemeUtils.relativeHeight(3),
      //   width: ThemeUtils.relativeHeight(3),
      //   // height:'30%',
      //   // width:'100%',
      // },
      detailsContaier:{
          
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginHorizontal: 16,
      },
     
      
});

export default styles;