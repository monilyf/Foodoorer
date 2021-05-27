import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Label from '../../ui/Label';

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="chevron-back" size={32} color={Color.WHITE} />
        </TouchableOpacity>
        <Label color={Color.WHITE} mt={5} bolder>
          {props.headerText}
        </Label>
        <Icon name="cart" size={26} color={Color.WHITE} />
      </View>
    </View>
  );
};

export default Header;
