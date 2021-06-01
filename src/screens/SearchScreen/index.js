import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, TouchableOpacity} from 'react-native';
import {StatusBars, Search, Header, Label} from '../../component';
import CommonStyle from '../../utils/CommonStyle';
import Color from '../../utils/Color';
import styles from './style';

const searchHistory = [
  {id: 1, foodItem: 'Creamy nachos'},
  {id: 2, foodItem: 'Tacos'},
  {id: 3, foodItem: 'Cripsy pasta'},
  {id: 4, foodItem: 'Khaman'},
];
class SearchScreen extends Component {
  state = {
    searchItem: '',
  };

  addToHistory = item => {
    <View>
      <Label>{item.searchItem}</Label>
    </View>;
  };
  render() {
    return (
      <SafeAreaView style={{backgroundColor: Color.WHITE_SMOKE}}>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
        <Header
          iconName="chevron-back-outline"
          justifyContent="space-between"
          onPress={() => this.props.navigation.goBack()}>
          <Search
            style={CommonStyle.shadowStyle}
            // onChangeText={(text)=>this.setState({searchItem:text})}
            // onSubmitEditing={() =>this.addToHistory(this.state.searchItem) }
          />
        </Header>
        <View style={styles.container}>
          <FlatList
            vertical
            showsHorizontalScrollIndicator={false}
            data={searchHistory}
            renderItem={({item}) => (
              <View style={{marginHorizontal: 35}}>
               <TouchableOpacity><Label bolder small mt={12} mb={12}>{item.foodItem}</Label></TouchableOpacity>
                <View style={[CommonStyle.endLine,{marginHorizontal:0}]}></View>
              </View>
            )}
            keyExtractor={this.keyExtractor}
          />
        </View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

export default SearchScreen;
