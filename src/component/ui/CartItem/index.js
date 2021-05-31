import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import CommonStyle from '../../../utils/CommonStyle';
import ThemeUtils from '../../../utils/ThemeUtils';
import Label from '../Label';
import ItemCountButton from '../ItemCountButton';

const CartItem = (props) => {
    return (
        <View style={{marginTop:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../../assets/images/icon_veg.png')} style={{ height: ThemeUtils.relativeHeight(2),
                width: ThemeUtils.relativeHeight(2),marginTop:4,marginRight:10}} />
                <Label bolder small>{props.foodItemName}</Label>
                </View>
            <ItemCountButton itemCount='1' onPressPlus={props.onPressPlus} onPressMinus={props.onPressMinus} />
            <Label  small>{props.price}</Label>
            </View>
                 <Label xsmall ms={25} color={Color.DARK_GRAY}>Regular</Label>
                <TouchableOpacity onPress={()=>alert('expand')}><Label bolder small mt={4} ms={25} color={Color.DARK_GRAY}>Customize </Label></TouchableOpacity>
           <View style={[CommonStyle.endLine,{marginHorizontal:5,marginTop:10}]}></View>
        </View>
    )
}

export default CartItem
