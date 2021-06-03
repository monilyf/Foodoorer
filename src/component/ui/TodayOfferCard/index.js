import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import Label from '../Label';
import styles from './style';

import Icon from 'react-native-vector-icons/Ionicons';



const TodayOfferCard = (props) => {
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
         <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
         <Label color={Color.PRIMARY_DARK} small bolder>
            {props.title}
          </Label>
          <View style={styles.rating}>
          <Icon name="star" color={Color.STAR}  size={14} />
          <Label color={Color.PRIMARY_DARK} bolder ph={4} pb={1.4} xsmall>{props.rating}</Label>
        </View>
         </View>
          <Label xsmall  color={Color.DARK_GRAY}>
            {props.time} | {props.priceForOne}
          </Label>
         
         
        </View>
      </View>
   </TouchableOpacity>
    )
}

export default TodayOfferCard
