import React from 'react';
import {View, TouchableOpacity,Image} from 'react-native';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';

import CommonStyle from '../../../utils/CommonStyle';
import ThemeUtils from '../../../utils/ThemeUtils';

const IconSqure = props => {
  return (

   
    <TouchableOpacity onPress={props.onPress}
      style={[{
        paddingVertical: 12,
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        // marginHorizontal:4
        paddingHorizontal:15,
        justifyContent:"center"
        
      },CommonStyle.shadowStyle]}>
      <Image 
        source={props.image}
        style={props.style}
      />
      {/* <Icon name={props.iconName} size={25} /> */}
    </TouchableOpacity>
    
      
        
   
 

  );
};

export default IconSqure;