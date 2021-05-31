import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';


const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.WHITE,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 6,
      
        marginRight:10,
        marginVertical:5,
    },
    imageContainer:{
        borderRadius: 6,
        height: ThemeUtils.relativeHeight(12),
        width: ThemeUtils.relativeHeight(25),
    },
    discount:{
        backgroundColor:Color.ERROR,
        borderRadius:4,
        // alignSelf:'flex-end',
        position:'absolute',
        top:14,
        right:14
    },
    rating:{
        backgroundColor:Color.SUCCESS,
        borderRadius:4,
        alignSelf:'center',
        // position:'absolute',
        
        
    },
    detailsContaier:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginVertical:5,
        width:'100%',
      
    },
    prices:{
        flexDirection:'row',
        marginTop:8
    },
    priceForOne:{
        position:'absolute',
        top:40,
        width:'100%',
        flexDirection:'row',
        marginTop:8,
        justifyContent:'space-between',
        

    }

});

export default styles;