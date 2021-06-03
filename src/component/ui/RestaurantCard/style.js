import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';


const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.WHITE,
        flexDirection: 'column',
        // padding: 10,
        borderRadius: 6,
        marginHorizontal: 20,
        marginVertical:10,elevation:0.5
    },
    imageContainer:{
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        
        height: ThemeUtils.relativeHeight(18),
        width: '100%',
    },
    discount:{
        backgroundColor:Color.ERROR,
        borderRadius:4,
        position:'absolute',
        top:90,
        paddingVertical:10
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
        padding: 10,
      
    },
   
    area_Price:{
        // position:'absolute',
        // top:40,
        width:'100%',
        flexDirection:'row',
        marginTop:8,
        justifyContent:'space-between',
        

    }

});

export default styles;