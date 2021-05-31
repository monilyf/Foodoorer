import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Color from '../../../utils/Color';
// import Toast from 'react-native-toast-message'
import Label from '../Label';
import styles from './style';

const ToastMessage = (props) => {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            {/* <View style={styles.column}></View> */}
            <View style={styles.content}>
              <View style={styles.toastMsg}>
                <Icon name="alert-circle" size={20} color={Color.PRIMARY_DARK} />
                <Label color={Color.PRIMARY_DARK} ms={12}>
                  {props.text}
                </Label>
                {/* {props.children} */}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  
}

export default ToastMessage;
