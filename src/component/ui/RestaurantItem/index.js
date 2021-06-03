import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color';
import styles from './style';
import CommonStyles from '../../../utils/CommonStyle'

const RestaurantItem = (props) => {
    return (
      //  <TouchableOpacity onPress={props.onPress}>
          <View
        style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={props.image}
        />
        <View
          style={styles.detailsContaier}>
         <View style={styles.row}>
         <Label color={Color.PRIMARY_DARK} bolder>
            {props.itemName}
          </Label>
          {/* <View style={{alignSelf:'center',}}>
          <Label color={props.foodMarkColor}  small >
            {props.foodMark}
          </Label>
          </View> */}
         <View>
         <Image
           style={styles.foodMark}
          source={props.foodMark}
         />
         </View>
         </View>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.description}
          </Label>
          <View
            style={CommonStyles.divider}></View>
         <View style={styles.row}>
         <Label small bolder color={Color.PRIMARY_DARK}>
            {props.price}
          </Label>
         {props.children}
         {/* <TouchableOpacity >
      <Label >Add</Label>
    </TouchableOpacity> */}
         </View>
        </View>
      </View>
      //  </TouchableOpacity>
    )
}

export default RestaurantItem
