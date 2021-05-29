import React from 'react';
import {TextInput, View} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Feather';

const Search = props => {
  return (
    <View
      style={[{
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        flexDirection: 'row',
   
 
      },props.style]}>
      <TextInput
        placeholder="Search for meals or area"
        style={{paddingHorizontal: 15, fontSize: 20, paddingRight: 45}}
      />
      <Icon name="search" style={{alignSelf: 'center', right: 15}} size={20} />
    </View>
  );
};

export default Search;

