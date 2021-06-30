import { CommonActions } from '@react-navigation/routers';
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Routes from '../../router/routes';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Label, StatusBars } from '../../component';
import Color from '../../utils/Color';
import logo from '../../assets/images/logo.png';
import CommonStyle from '../../utils/CommonStyle';
import { resetNavigation } from '../../utils/CommonFunctions';

import { connect } from 'react-redux';

class SplashScreen extends Component {
  // Navigate to authenticated route
  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{ name: Routes.Authenticated }],
  });

  // Navigate to NotAuthenticated route
  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{ name: Routes.NotAuthenticated }],
  });

  componentDidMount() {
    console.log('Splash didMount');
    this.checkAuthentication();
  }


  checkAuthentication = async () => {
    let _token = this.props.signIn
    if (
      _token != null &&
      _token != undefined &&
      _token != ''
    ) {
      this.goTo(true);
    }
    else {
      this.goTo(false)
    }
  };

  goTo = async value => {
    setTimeout(() => {
      let _props = this.props.navigation;
      if (!value) {
        let { boarding } = this.props.common;

        if (boarding)
          resetNavigation(_props, Routes.NotAuthenticated);
        else
          resetNavigation(_props, Routes.Onboarding);
      }
      else
        resetNavigation(_props, Routes.Authenticated);
    }, 2000);

  };





  render() {


    return (
      <View style={[styles.SplashScreen_RootView, CommonStyle.container]}>
        <StatusBars hidden={true} />
        <Image source={logo} style={styles.logo} />

        <View style={styles.footer}>
          <Label color={Color.DARK_GRAYISH_BLUE}> By Team{'\n'}Foodoorer</Label>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  // console.log('screen state--', state.signIn)

  return {

    signIn: state.signIn.token,
    common: state.common
  }
}

export default connect(mapStateToProps, '')(SplashScreen);