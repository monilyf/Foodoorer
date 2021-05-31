import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color'


const ItemCountButton = (props) => {
    return (
        <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 6,
          borderColor: Color.PRIMARY_DARK,
          paddingHorizontal: 10,
          paddingVertical: 2,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={props.onPressMinus}>
          <Label me={6} bolder>
            -
          </Label>
        </TouchableOpacity>
        <Label small me={6}>
          {props.itemCount}
        </Label>
        <TouchableOpacity onPress={props.onPressPlus}>
          <Label bolder>+</Label>
        </TouchableOpacity>
      </View>
    )
}

export default ItemCountButton
