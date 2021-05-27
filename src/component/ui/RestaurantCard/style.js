import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';


const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.BOX_BG,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 6,
        marginHorizontal: 5,
    },
    imageContainer:{
        borderRadius: 6,
        height: ThemeUtils.relativeHeight(12),
        width: ThemeUtils.relativeHeight(25),
    },
    discount:{
        backgroundColor:Color.ERROR,
        borderRadius:4,
        alignSelf:'flex-end',
        position:'absolute',
        top:14,
        right:14
    },
    detailsContaier:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginVertical:5
    },
    prices:{
        flexDirection:'row',
        marginTop:8
    },

});

export default styles;