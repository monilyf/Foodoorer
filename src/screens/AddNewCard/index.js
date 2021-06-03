import React, {Component} from 'react';
import {SafeAreaView, TextInput,ScrollView, View} from 'react-native';
import {
  StatusBars,
  Header,
  Label,
  PaymentInput,
  SubmitButton,Search
} from '../../component';
import CommonStyle from '../../utils/CommonStyle';
import ThemeUtils from '../../utils/ThemeUtils';
import Color from '../../utils/Color';
import styles from './style';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class AddNewCard extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor:Color.WHITE_SMOKE}}>
      <StatusBars
        hidden={false}
        barStyle="dark-content"
        backgroundColor={Color.WHITE_SMOKE}
      />
      <View style={styles.container}>
        <Header
          iconName="chevron-back-outline"
          onPress={() => this.props.navigation.goBack()}>
          {/* <Search style={CommonStyle.shadowStyle}/> */}
          <View style={{alignSelf: 'center'}}>
            <Label ms={30} bolder large>
              Add New Card
            </Label>
          </View>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={{marginHorizontal: 20, marginTop: 20}}> */}
            <KeyboardAwareScrollView
              style={{flex: 1}}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={true}
              enableResetScrollToCoords={false}
              keyboardVerticalOffset={0}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always">
            <View>
                  <Label ms={20} color={Color.PRIMARY_DARK}mb={10}>Card Number</Label>
                  <View style={{borderColor:Color.DARK_GRAY,borderRadius:6,borderWidth:1,marginHorizontal:20}}>
                  <TextInput/>
                  </View>
                  <View style={{flexDirection:'row'}}>
                  <View>  
                  <Label mt={20} ms={20} mb={10} color={Color.PRIMARY_DARK}>Valid upto(MM/YY)</Label>
                  <View style={{borderColor:Color.DARK_GRAY,borderRadius:6,borderWidth:1,marginHorizontal:20,width:ThemeUtils.relativeWidth(50)}}>
                  <TextInput/>
                  </View>
                  </View>
                  <View>
                  <Label mt={20} ms={20} mb={10} color={Color.PRIMARY_DARK}>CVV</Label>
                  <View style={{borderColor:Color.DARK_GRAY,borderRadius:6,borderWidth:1,marginHorizontal:20,width:ThemeUtils.relativeWidth(30)}}>
                  <TextInput/>
                  </View>
                  </View>
                  </View>
                  <Label ms={20} mt={20} color={Color.PRIMARY_DARK}mb={10}>Name on Card</Label>
                  <View style={{borderColor:Color.DARK_GRAY,borderRadius:6,borderWidth:1,marginHorizontal:20}}>
                  <TextInput/>
                  </View>
              </View>

              <SubmitButton
            buttonText="ADD NEW"
            style={{width: ThemeUtils.relativeHeight(47)}}
            onPress={() =>
             alert('card added')
            }
          />
            </KeyboardAwareScrollView>
          {/* </View> */}
        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

export default AddNewCard;
