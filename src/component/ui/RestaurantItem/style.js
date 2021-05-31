import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.WHITE,
        width:'100%', 
        flexDirection: 'row',
        padding: 10,
        borderRadius: 6,
        marginRight:10,
        marginVertical:5,
      },
      imageContainer:{
        borderRadius: 6,
        height: ThemeUtils.relativeHeight(11),
        width: ThemeUtils.relativeWidth(20),
      },
      row:{
        // width:'100%',
        flexDirection:'row',justifyContent:'space-between',
        // backgroundColor:'red',

      },
      foodMark:{
        // marginLeft:20,
        height: ThemeUtils.relativeHeight(2),
        width: ThemeUtils.relativeHeight(2),
        alignSelf:'center'
        // height:'30%',
        // width:'100%',
      },
      detailsContaier:{
        width:'70%',
        flexDirection: 'column',
        // alignSelf: 'flex-start',
        marginHorizontal: 16,

      },
     
      
});

export default styles;