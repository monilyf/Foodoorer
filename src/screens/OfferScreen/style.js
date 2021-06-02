import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // marginLeft: "auto",
    // marginRight: "auto",
    paddingHorizontal:20,
    // backgroundColor:'red'
   

  },
  topTabContainer:{
    
    // backgroundColor:Color.WHITE,
    borderBottomLeftRadius:14,
    borderBottomRightRadius:14,
    marginHorizontal:20,

  },
  center:{
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'green'
  },
 tabContainer:{
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    height: 44,
    position: "relative",
    
},
animatedStyle:{
    position: "absolute",
    width: "50%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor:Color.PRIMARY_DARK,
    borderRadius: 4,
    
},
tabStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.PRIMARY_DARK,
    borderRadius: 6,
   
},
listStyle:{
    // width: '100%',
    // flexDirection: 'row', 
    // marginLeft: 20,
  },



});

export default styles;
