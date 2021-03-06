import React, {useState, Component} from 'react';
import {View, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StatusBars,
  Label,
  InputContainer,
  SubmitButton,
  ProfileNavItem,
} from '../../component';
import Color from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Routes from '../../router/routes';
import {CommonActions} from '@react-navigation/routers';
import {validation} from '../../utils/ValidationUtils';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
    };
  }
  handleOnSubmit = () => {
    let emailError, phoneError;
    let isValid;
    emailError = validation('email', this.state.email);
    phoneError = validation('phoneNo', this.state.phone);

    if (emailError != null || phoneError != null) {
      console.log('validation Error in Edit Account');
      this.setState({
        emailError: emailError,
        phoneError: phoneError,
      });
      isValid = false;
    } else {
      console.log('Edit Account Done');
      this.setState({
        emailError: '',
        phoneError: '',
      });
      isValid = true;
    }
    if (isValid) {
      // update code herte to save changes
      this.setState({modalVisible: !this.state.modalVisible});
      // this.props.navigation.push(Routes.Profile);
    }
  };

  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Splash}],
  });
  removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE}
        />
        <View
          style={[
            styles.container,
            {
              backgroundColor: this.state.modalVisible
                ? Color.LIGHT_GRAY
                : Color.WHITE,
            },
          ]}>
          <View style={styles.profileHeader}>
            <View>
              <Label bolder large color={Color.BLACK}>
                Steve Smith
              </Label>
              <Label color={Color.DARK_GRAY} small>
                stevesmith@gmail.com
              </Label>
            </View>
            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <Label small color={Color.ERROR} align="right">
                  {' '}
                  EDIT
                </Label>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.subContainer}>
            <ProfileNavItem
              onPress={() => alert('Pressed!')}
              iconPath={require('../../assets/icons/profile_screen_icon/order.png')}
              label="My Order"
            />

            <View style={CommonStyle.endLine}></View>
            <ProfileNavItem
              onPress={() => alert('Pressed!')}
              iconPath={require('../../assets/icons/profile_screen_icon/address.png')}
              label="Manage Addresses"
            />

            <View style={CommonStyle.endLine}></View>
            <ProfileNavItem
              onPress={() => alert('Pressed!')}
              iconPath={require('../../assets/icons/profile_screen_icon/payment.png')}
              label="Payments"
            />

            <View style={CommonStyle.endLine}></View>
            <ProfileNavItem
              onPress={() => alert('Pressed!')}
              iconPath={require('../../assets/icons/profile_screen_icon/favourite.png')}
              label="Favourites"
            />

            <View style={CommonStyle.endLine}></View>
            <ProfileNavItem
              onPress={() => alert('Pressed!')}
              iconPath={require('../../assets/icons/profile_screen_icon/help.png')}
              label="Help"
            />

            <View style={CommonStyle.endLine}></View>
            <ProfileNavItem
              onPress={() => this.removeAuthentication()}
              iconPath={require('../../assets/icons/profile_screen_icon/logout.png')}
              label="Logout"
            />

            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() =>
                this.setState({modalVisible: !this.state.modalVisible})
              }>
              <View style={styles.editAccount}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Label color={Color.PRIMARY_DARK} bolder mb={12} large>
                    EDIT ACCOUNT
                  </Label>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({modalVisible: !this.state.modalVisible})
                    }>
                    <Icon
                      name="close"
                      size={25}
                      style={{alignSelf: 'center'}}
                      color={Color.PRIMARY_DARK}
                    />
                  </TouchableOpacity>
                </View>
                <Label color={Color.PRIMARY_DARK} ms={22} mb={5} small>
                  Mobile number
                </Label>

                <InputContainer
                  iconName="phone-android"
                  placeholder="9898656656"
                  iconColor={Color.PRIMARY_DARK}
                  keyboardType="phone-pad"
                  onChangeText={text => this.setState({phone: text})}
                />
                {this.state.phoneError != null ? (
                  <Label small mt={5} mb={7} ms={21} color={Color.ERROR}>
                    {this.state.phoneError}
                  </Label>
                ) : (
                  <Label></Label>
                )}

                <Label color={Color.PRIMARY_DARK} ms={22} mb={7} small>
                  Email
                </Label>
                <InputContainer
                  iconName="email"
                  placeholder="loremipsum@email.com"
                  keyboardType="email-address"
                  iconColor={Color.PRIMARY_DARK}
                  onChangeText={text => this.setState({email: text})}
                />
                {this.state.emailError != null ? (
                  <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                    {this.state.emailError}
                  </Label>
                ) : (
                  <Label></Label>
                )}
                <SubmitButton
                  onPress={() => this.handleOnSubmit()}
                  buttonText="SAVE"
                />
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Profile;
