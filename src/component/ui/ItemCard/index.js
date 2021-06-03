import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color';
import styles from './style';
import CommonStyle from '../../../utils/CommonStyle'

const ItemCard = (props) => {
    return (
       <TouchableOpacity onPress={props.onPress}>
          <View
        style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={props.image}
        />
        <View
          style={styles.detailsContaier}>
         <View style={[{flexDirection:'row',justifyContent:'space-between'}]}>
         <Label color={Color.PRIMARY_DARK} small bolder>
            {props.title}
          </Label>
          {/* <View style={{alignSelf:'center',}}>
          <Label color={props.foodMarkColor}  small >
            {props.foodMark}
          </Label>
          </View> */}
         <Image
           style={CommonStyle.foodMark}
          source={props.foodMark}
         />
         </View>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.by}
          </Label>
          <View
            style={CommonStyle.divider}></View>
          <Label small bolder color={Color.PRIMARY_DARK}>
            {props.price}
          </Label>
        </View>
      </View>
       </TouchableOpacity>
    )
}

export default ItemCard
