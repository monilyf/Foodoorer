import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Color from '../../../utils/Color';
import Icon from 'react-native-vector-icons/Feather';
import Routes from '../../../router/routes';
import ThemeUtils from '../../../utils/ThemeUtils'

class Search extends React.Component {
  render(){
  return (
    <View 
      style={[{
        backgroundColor: Color.WHITE,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent:'space-between',
                  alignItems:'center',
                  height:ThemeUtils.relativeHeight(6.5),
                  width:ThemeUtils.relativeHeight(38),
 
      },this.props.style]}>
      <TextInput
        placeholder="Search for meals or area"
        returnKeyType='search'
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}
        // editable={this.props.editable}
        // onChangeText={()=>this.props.navigation.push(Routes.SearchScreen)}
        style={{ fontSize: 18}}
      />
      <Icon name="search" style={{alignSelf: 'center'}} size={20} />
    </View>
  );
    }
};

export default Search;

