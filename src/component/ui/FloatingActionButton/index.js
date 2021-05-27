import React, {Component} from 'react';
import {circleStyle} from '../../../utils/ThemeUtils';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

const FloatingActionButton = props => {
  onClick = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  let stylesArray = [];

  if (props.left) stylesArray.push({alignSelf: 'flex-start'});
  else if (props.right) stylesArray.push({alignSelf: 'flex-end'});
  else if (props.center) stylesArray.push({alignSelf: 'center'});

  stylesArray.push({
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    marginTop: props.mt,
    marginBottom: props.mb,
    marginStart: props.ms,
    marginEnd: props.me,
  });

  stylesArray.push(props.style);
  return (
    <TouchableOpacity
      style={[
        circleStyle,
        stylesArray,
        {
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
        },
      ]}
      onPress={onClick}>
      <Icon name={props.icon} size={props.iconSize} color={props.iconColor} />
    </TouchableOpacity>
  );
};

FloatingActionButton.defaultProps = {
  size: 50,
  color: Color.PRIMARY_DARK,
  icon: 'home',
  iconColor: Color.WHITE,
  iconSize: 20,
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
  left: false,
  right: false,
  center: false,
};

FloatingActionButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

export default FloatingActionButton;
