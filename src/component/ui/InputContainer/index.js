import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconError from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEye from 'react-native-vector-icons/Octicons';
import styles from './style';

const InputContainer = props => {
  return (
    <View>
      <View style={[styles.inputContainer, props.style]}>
        <Icon
          name={props.iconName}
          color={props.iconColor}
          size={20}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          value={props.value}
          onEndEditing={props.onEndEditing}
          maxLength={props.maxLength}
          onChangeText={props.onChangeText}
          secureTextEntry={Boolean(props.secureText)}
          keyboardType={props.keyboardType}
        />
        <TouchableOpacity onPress={props.onToggle}>
          <IconError
            name={props.errorIcon}
            color={props.iconColor}
            size={20}
            style={styles.errorIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onToggle}>
          <IconEye
            name={props.extraIconName}
            color={props.iconColor}
            size={20}
            style={styles.extraIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputContainer;
