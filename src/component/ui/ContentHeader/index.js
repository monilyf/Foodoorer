import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Label from '../Label'
import Icon from 'react-native-vector-icons/Feather';
import Color from '../../../utils/Color'
 

const ContentHeader = (props) => {
    return (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical:12,
         
        }}>
        <Label large bolder color={Color.PRIMARY_DARK}>
          {props.title}
        </Label>
       <TouchableOpacity onPress={props.onPress} 
       style={{flexDirection: 'row',alignSelf:'center'}}>
          <Icon name={props.iconName} size={16} style={{alignSelf:'center'}} color={Color.DARK_GRAY} />
          <Label color={Color.DARK_GRAY} ms={10} small>
           {props.text}
          </Label>
       </TouchableOpacity>
      </View>
    )
}

export default ContentHeader
