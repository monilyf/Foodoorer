import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Label from '../Label';
import Color from '../../../utils/Color';
import styles from './style';
import CommonStyle from '../../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/Ionicons';


const FreeDeliveryItemCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={props.image} />
        <View style={styles.detailsContaier}>
          <Label color={Color.PRIMARY_DARK} bolder>
            {props.title}
          </Label>

          <Label xsmall bolder color={Color.DARK_GRAY}>
            {props.type}
          </Label>
          <View style={CommonStyle.divider}></View>
          <View style={[{flexDirection:'row'}]}>


          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}> */}
         
          <Icon name="star" color={Color.STAR}  size={14} />
          <Label color={Color.DARK_GRAY}  ph={4} pb={1.4} xsmall>{props.rating}</Label>
         {/* </View> */}
          
          
          <Label xsmall  color={Color.DARK_GRAY}>
          {' | '} {props.time} 
          </Label>
         



          </View>
          <Label small bolder color={Color.PRIMARY_DARK}>
            {props.price}
          </Label>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FreeDeliveryItemCard;
