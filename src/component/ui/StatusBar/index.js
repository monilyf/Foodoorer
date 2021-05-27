import React from 'react';
import { StatusBar} from 'react-native';

const StatusBars = props => {
  return (
    <StatusBar
      hidden={props.hidden}
      barStyle={props.barStyle}
      backgroundColor={props.backgroundColor}
    />
  );
};
export default StatusBars;
