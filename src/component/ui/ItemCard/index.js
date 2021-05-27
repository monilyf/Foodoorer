import React from 'react';
import { View, Image } from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const ItemCard = (props) => {
    return (
        <View
        style={{
          backgroundColor: Color.BOX_BG,
          flexDirection: 'row',
          padding: 10,
          borderRadius: 6,
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            borderRadius: 6,
            height: ThemeUtils.relativeHeight(12),
            width: ThemeUtils.relativeWidth(22),
          }}
          // resizeMode="contain"
          source={props.image}
        />
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'flex-start',
            marginHorizontal: 16,
          }}>
          <Label color={Color.PRIMARY_DARK} bolder>
            {props.title}
          </Label>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.by}
          </Label>
          <View
            style={{
              width: ThemeUtils.relativeWidth(12),
              borderWidth: 1,
              opacity: 0.3,
              borderColor: Color.DARK_GRAY,
              marginVertical: 10,
            }}></View>
          <Label small bolder color={Color.PRIMARY_DARK}>
            {props.price}
          </Label>
        </View>
      </View>
    )
}

export default ItemCard
