import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';


const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageContainer:{
        height: ThemeUtils.relativeHeight(2),
        width: ThemeUtils.relativeHeight(2),
        marginRight:10,
        marginTop:4
    },
    endLine:{
        marginHorizontal:5,
        marginTop:10
    }
});

export default styles;