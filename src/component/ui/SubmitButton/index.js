import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Color from '../../../utils/Color';
import Label from '../Label';

const SubmitButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{alignItems: 'center'}}>
      <LinearGradient
        colors={[Color.GRADIENT1, Color.GRADIENT2]}
        style={styles.btnPrimary}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Label bolder color={Color.WHITE}>
          {props.buttonText}
        </Label>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SubmitButton;
