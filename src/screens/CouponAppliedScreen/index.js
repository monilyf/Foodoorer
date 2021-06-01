import React from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity,Image} from 'react-native';
import {
  Label,
  StatusBars,
  Header,
  SubmitButton,
  SmallButton,
  ModalView,
  InputContainer,
} from '../../component';
import Color from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyle from '../../utils/CommonStyle';

class CouponAppliedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }
  render() {
    return (
      <SafeAreaView>
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
                Enter discount code
              </Label>
            </View>
          </Header>
        

          <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
            </View>
      </SafeAreaView>
    );
  }
}

export default CouponAppliedScreen;
