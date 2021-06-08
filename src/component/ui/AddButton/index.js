import React from 'react'
import { TouchableOpacity } from 'react-native'
import Label from '../Label'
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../../utils/Color'


const AddButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 6, paddingHorizontal: 15, paddingVertical: 2}}>
          <Label small color={Color.WHITE}>
            Add
          </Label>
        </LinearGradient>
      </TouchableOpacity>
    )
}

export default AddButton

