import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../../utils/Color';
import CommonStyle from '../../../utils/CommonStyle';


const Back = (props) => {
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
       
        <Icon name='chevron-back-outline' size={25} />
      </TouchableOpacity>
    )
}

export default Back
