import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import Label from '../Label';
import styles from './style';

const RestaurantCard = (props) => {
    return (
   <TouchableOpacity onPress={props.onPress}>
          <View
        style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={props.image}
          resizeMode='cover'
        />
        <View style={styles.discount}>
          <Label color={Color.WHITE} ph={8} xsmall>{props.discount}</Label>
        </View>
        <View
          style={styles.detailsContaier}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Label color={Color.PRIMARY_DARK} bolder>
            {props.title}
          </Label>
          <View style={styles.rating}>
          <Label color={Color.WHITE} bolder ph={4} pb={1.4} xsmall>{props.rating}</Label>
        </View>
         </View>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.description}
          </Label>
         
        
         <View style={styles.area_Price}>
         <Label small  color={Color.PRIMARY_DARK}>
            {props.area}
          </Label>
          <Label small  ms={15} color={Color.PRIMARY_DARK}>
            {props.priceForOne}
          </Label>
         </View>
        </View>
      </View>
   </TouchableOpacity>
    )
}

export default RestaurantCard
