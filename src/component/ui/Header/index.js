import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import Search from '../Search';
import CommonStyle from '../../../utils/CommonStyle';
import IconSqure from '../IconSqure'

const Header = props => {
  return (


    <View
    style={{
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: props.justifyContent,
      paddingVertical: 15,
      backgroundColor:Color.WHITE_SMOKE
    }}>
    <TouchableOpacity onPress={props.onPress}
      style={[{
        padding: 10,
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        
      },CommonStyle.shadowStyle]}>
      <Icon name={props.iconName} size={25} />
    </TouchableOpacity>
        {/* <IconSqure image={props.image} onPress={props.onPress}/> */}
        {/* <Search style={CommonStyle.shadowStyle}/> */}
      {props.children}
        
   
  </View>

  );
};

export default Header;
