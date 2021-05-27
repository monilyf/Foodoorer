import React from 'react';
import { View, Image } from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';
import styles from '../InputContainer/style';
import Label from '../Label'

const RestaurantCard = (props) => {
    return (
        <View
        style={{
          backgroundColor: Color.BOX_BG,
          flexDirection: 'column',
          padding: 10,
          borderRadius: 6,
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            borderRadius: 6,
            height: ThemeUtils.relativeHeight(12),
            width: ThemeUtils.relativeHeight(25),
          }}
          source={props.image}
        />
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'flex-start',
            marginVertical:5
          }}>
          <Label color={Color.PRIMARY_DARK} bolder>
            {props.title}
          </Label>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.description}
          </Label>
         
         <View style={{flexDirection:'row',marginTop:8}}>
         <Label small bolder color={Color.DARK_GRAY}>
            {props.original_price}
          </Label>
          <Label small  bolder ms={15} color={Color.PRIMARY_DARK}>
            {props.new_price}
          </Label>
         </View>
        </View>
      </View>
    )
}

export default RestaurantCard
