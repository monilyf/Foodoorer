import React from 'react';
import { View, Image } from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color';
import styles from './style';

const ItemCard = (props) => {
    return (
        <View
        style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={props.image}
        />
        <View
          style={styles.detailsContaier}>
          <Label color={Color.PRIMARY_DARK} bolder>
            {props.title}
          </Label>
          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.by}
          </Label>
          <View
            style={styles.divider}></View>
          <Label small bolder color={Color.PRIMARY_DARK}>
            {props.price}
          </Label>
        </View>
      </View>
    )
}

export default ItemCard
