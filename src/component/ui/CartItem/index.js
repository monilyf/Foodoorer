import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import CommonStyle from '../../../utils/CommonStyle';
import ThemeUtils from '../../../utils/ThemeUtils';
import Label from '../Label';
import ItemCountButton from '../ItemCountButton';
import styles from './style';

const CartItem = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.rowContainer}>
       
                <View style={styles.rowContainer}>
                <Image source={require('../../../assets/images/icon_veg.png')} style={styles.imageContainer} />
                <Label bolder small>{props.foodItemName}</Label>
                </View>
            <ItemCountButton itemCount={props.itemCount} onPressPlus={props.onPressPlus} onPressMinus={props.onPressMinus} />
            <Label  small>₹ {props.price}</Label>
            </View>
                 <Label xsmall ms={25} color={Color.DARK_GRAY}>Regular</Label>
                <TouchableOpacity onPress={()=>alert('expand')}><Label  small mt={4} ms={25} color={Color.DARK_GRAY}>Customize </Label></TouchableOpacity>
           <View style={[CommonStyle.endLine,styles.endLine]}></View>
        </View>
    )
}

export default CartItem
