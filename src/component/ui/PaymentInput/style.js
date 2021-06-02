import { StyleSheet } from "react-native";
import ThemeUtils from '../../../utils/ThemeUtils'


const styles=StyleSheet.create({
    input:{
        fontSize: 18,
        height:ThemeUtils.relativeHeight(6),
    //    width:ThemeUtils.relativeHeight(25),
    // width:'100%',
        // paddingLeft:13,
        borderWidth:1,
        borderRadius:5,
  
    },
})
export default styles;