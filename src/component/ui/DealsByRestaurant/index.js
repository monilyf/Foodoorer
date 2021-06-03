import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import Label from '../Label';
import styles from './style';


const DealsByRestaurant = (props) => {
    return (
   <TouchableOpacity onPress={props.onPress}>
          <View
        style={styles.container}>
        <Image
          style={styles.imageContainer}
         
          source={props.image}
          resizeMode={props.resizeMode}
        
        />
        <View style={styles.discount}>
          <Label color={Color.WHITE} ph={8} xsmall>{props.discount}</Label>
        </View>
        <View
          style={styles.detailsContaier}>
          <Label color={Color.PRIMARY_DARK} small bolder>
            {props.title}
          </Label>
          <Label xsmall  color={Color.DARK_GRAY}>
            {props.description}
          </Label>
         
         <View style={styles.prices}>
         <Label small bolder color={Color.DARK_GRAY}>
            {props.original_price}
          </Label>
          <Label small  bolder ms={15} color={Color.PRIMARY_DARK}>
            {props.new_price}
          </Label>
         </View>
        </View>
      </View>
   </TouchableOpacity>
    )
}

export default DealsByRestaurant
