import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Feather';
import Routes from '../../../router/routes'

class Search extends React.Component {
  render(){
  return (
    <View 
      style={[{
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        flexDirection: 'row',
   
 
      },this.props.style]}>
      <TextInput
        placeholder="Search for meals or area"
        // editable={this.props.editable}
        // onChangeText={()=>this.props.navigation.push(Routes.SearchScreen)}
        style={{paddingHorizontal: 15, fontSize: 20, paddingRight: 45}}
      />
      <Icon name="search" style={{alignSelf: 'center', right: 15}} size={20} />
    </View>
  );
    }
};

export default Search;

