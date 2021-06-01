import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import Routes from '../../router/routes'

class MyOrderScreen extends React.Component {
  
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
                My Orders
              </Label>
            </View>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Label bolder small>
                  McDonald's
                </Label>
                <Label bolder small>
                  ₹ 248.00
                </Label>
              </View>
              <Label small color={Color.DARK_GRAY}>
                SG highway, Ahmedabad
              </Label>
              <View style={CommonStyle.divider}></View>
              <Label xsmall>Nachos x 1, Maharaja mac x 1</Label>
              <Label small color={Color.DARK_GRAY}>
                1 June 2021, 06:19 PM
              </Label>

              <SmallButton buttonText="REORDER" onPress={()=>this.props.navigation.push(Routes.RestaurantScreen)}/>
              <View
              style={{
                width: '100%',
    opacity: 0.3,
                borderWidth: 0.5,
                borderColor: Color.DARK_GRAY,
              }}></View>
            </View>

           
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default MyOrderScreen;
