import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Label from '../Label'
import Icon from 'react-native-vector-icons/Feather';
import Color from '../../../utils/Color'
 

const ContentHeader = (props) => {
    return (
        <View
        style={[{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical:12,
         
        },props.style]}>
        <Label  bolder color={Color.PRIMARY_DARK}>
          {props.title}
        </Label>
       <TouchableOpacity onPress={props.onPress} 
       style={{flexDirection: 'row',alignSelf:'center'}}>
          <Icon name={props.iconName} size={14} style={{alignSelf:'center'}} color={Color.DARK_GRAY} />
          <Label color={Color.DARK_GRAY} ms={10} xsmall>
           {props.text}
          </Label>
       </TouchableOpacity>
      </View>
    )
}

export default ContentHeader
