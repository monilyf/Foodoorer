import React from 'react'
import { View } from 'react-native'
import Color from '../../../utils/Color'
import Label from '../Label'

const OfferTag = (props) => {
    return (
        <View style={[{
            // marginTop:14,
            borderWidth:2,
            // paddingVertical:8,
            borderRadius:8,
            borderColor:props.borderColor,
            backgroundColor:props.backgroundColor,
            alignItems:'center',
            borderStyle:'dashed',
        },props.style]}>
          {props.children}
        </View>
    )
}

export default OfferTag
