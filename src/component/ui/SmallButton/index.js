import React from 'react'
import { TouchableOpacity } from 'react-native'
import Label from '../Label';
import Color from '../../../utils/Color'
import ThemeUtils from '../../../utils/ThemeUtils'

const SmallButton = (props) => {
    return (
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={props.onPress}
              style={{
                    borderColor:Color.PRIMARY_DARK,
                    borderWidth:2,
                    borderRadius: 6,
                    marginVertical:20,
                    // paddingHorizontal: 30,
                    // paddingVertical: 6,
                    justifyContent:'center',
                    width:ThemeUtils.relativeHeight(22),
                    height:ThemeUtils.relativeHeight(5.5)
                  }}
              >
                  <Label small bolder align='center' color={Color.PRIMARY_DARK}>
                    {props.buttonText}
                  </Label>
              </TouchableOpacity>
    )
}

export default SmallButton
