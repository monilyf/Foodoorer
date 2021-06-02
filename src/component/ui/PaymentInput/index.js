// import React, { Component } from 'react'
// import { Text, TextInput, View,StyleSheet } from 'react-native'
// import { CommonStyle } from '../../../utils';
// import Label from '../Label'
// import styles from './style';

// export class PaymentInput extends Component {
//     render() {
//         return (
//             <View style={CommonStyle.container}>
//                <Label mt={10}>
//                    {this.props.name}
//                </Label>
//                <View>
//                    <TextInput style={styles.input}
//                    ref={this.props.ref} 
//                 keyboardType={this.props.keyboardType}
//                 placeholder={this.props.placeholder} 
//                 onChangeText={this.props.onChangeText} 
//                 value={this.props.value}
//                 onBlur={this.props.onBlur}
//                 error={this.props.error}/>

                   
//                </View>
//             </View>
//         )
//     }
// }

// export default PaymentInput;

import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Feather';
import Routes from '../../../router/routes';
import ThemeUtils from '../../../utils/ThemeUtils'

class PaymentInput extends React.Component {
  render(){
  return (
    <View 
      style={[{
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 15,
                  alignItems:'center',
                  height:ThemeUtils.relativeHeight(6),
                  width:ThemeUtils.relativeHeight(40),
 
      },this.props.style]}>
      <TextInput
        placeholder="Search for meals or area"
        returnKeyType='search'
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}
        // editable={this.props.editable}
        // onChangeText={()=>this.props.navigation.push(Routes.SearchScreen)}
        style={{ fontSize: 20}}
      />
      {/* <Icon name="search" style={{alignSelf: 'center', paddingLeft:10}} size={20} /> */}
    </View>
  );
    }
};

export default PaymentInput;

