import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Label from '../Label';
import Color from '../../../utils/Color';

const SocialButton = props => {
  onClick = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.btnPrimary} onPress={onClick}>
      <Image style={styles.btnImage} source={props.image} />
      <Label color={Color.PRIMARY_DARK} bolder ph={20} small>
        {props.buttonText}
      </Label>
    </TouchableOpacity>
  );
};

export default SocialButton;
