import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
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
          <View style={{marginHorizontal: 20, marginTop: 20}}>
            <KeyboardAwareScrollView
              style={{flex: 1}}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={true}
              enableResetScrollToCoords={false}
              keyboardVerticalOffset={0}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always">
              <PaymentInput name="Card Number" />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: ThemeUtils.relativeWidth(50),
                  }}>
                  <PaymentInput name="Valid upto(mm/yy)" />
                </View>
                <View
                  style={{width: ThemeUtils.relativeWidth(30), marginRight: 5}}>
                  <PaymentInput name="CVV" />
                </View>
              </View>
              <PaymentInput name="Name on card" />

              <SubmitButton
            buttonText="ADD NEW"
            style={{width: ThemeUtils.relativeHeight(47)}}
            onPress={() =>
             alert('card added')
            }
          />
            </KeyboardAwareScrollView>
          </View>
          <Search />
        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

export default AddNewCard;
