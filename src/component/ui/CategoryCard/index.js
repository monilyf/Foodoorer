import React from 'react';
import { View,Image } from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';
import Label from '../Label'

const CategoryCard = (props) => {
    return (
        <View style={{flexDirection: 'column', marginHorizontal: 5}}>
        <Image
          style={{
            borderRadius: 6,
            height: ThemeUtils.relativeHeight(9),
            width: ThemeUtils.relativeWidth(24),
          }}
          // resizeMode="contain"
          source={props.image}
        />
        <Label small bolder mt={5} ms={30} color={Color.PRIMARY_DARK}>
          {props.title}
        </Label>
      </View>
    )
}

export default CategoryCard
