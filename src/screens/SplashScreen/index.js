import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Routes from '../../router/routes';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Label, StatusBars} from '../../component';
import Color from '../../utils/Color';
import logo from '../../assets/images/logo.png';
import CommonStyle from '../../utils/CommonStyle';
import { resetNavigation } from '../../utils/CommonFunctions';

import { connect } from 'react-redux';

class SplashScreen extends Component {
  // Navigate to authenticated route
  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });

  // Navigate to NotAuthenticated route
  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.NotAuthenticated}],
  });

  componentDidMount() {
    console.log('Splash didMount');
    this.checkAuthentication();
  }


  checkAuthentication = async () => {
    // let isAuthenticated = await AsyncStorage.getItem('token');
    // console.log('====================================');
    // console.log(isAuthenticated);
    // console.log('====================================');
    // if (
    //   isAuthenticated != null &&
    //   isAuthenticated != undefined &&
    //   isAuthenticated != ''
    // ) {
    //   this.goTo(true);
    //   global.userToken = isAuthenticated;
    // }
    // else
    //   this.goTo(false);

    let _token = this.props.signIn.token;
    console.log('token------',_token);

    if(
      _token != null && 
      _token != undefined &&
      _token != ''
    ){
      this.goTo(true);
    }
    else{
      this.goTo(false)
    }
  };


  goTo = async value => {
    // if (value) {
    //   setTimeout(() => {
    //     this.props.navigation.dispatch(this.resetToAuth);
    //   }, 2000);
    // } else {
    //   setTimeout(() => {
    //     this.props.navigation.dispatch(this.resetToNotAuth);
    //   }, 2000);
    // }

    setTimeout(() => {
      let _props = this.props.navigation;
      if (!value) {
        let { boarding } = this.props.common;
        console.log(boarding, "------- ... boarding")
        if (boarding)
          resetNavigation(_props, Routes.NotAuthenticated);
        else
          resetNavigation(_props, Routes.Onboarding);
      }
      else
        resetNavigation(_props, Routes.Authenticated);
    }, 2000);

  };



  // checkAuthentication = async () => {
  //   let authenticated = await AsyncStorage.getItem('register_data');
  //   console.log('checkAuth Authenticated val - ', authenticated);
  //   if (authenticated != null) {
  //     setTimeout(() => {
  //       this.props.navigation.dispatch(this.resetToAuth);
  //     }, 3000);
  //   } else {
  //     setTimeout(() => {
  //       this.props.navigation.dispatch(this.resetToNotAuth);
  //     }, 3000);
  //   }
  // };

  render() {
  console.log('splash screen render state--',this.props.register_data)

    return (
      <View style={[styles.SplashScreen_RootView, CommonStyle.container]}>
        <StatusBars hidden={true} />
        <Image source={logo}  style={styles.logo} />

        <View style={styles.footer}>
          <Label color={Color.DARK_GRAYISH_BLUE}> By Team{'\n'}Foodoorer</Label>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state =>{
  console.log('splash screen state--',state)
  // console.log('splash screen state.signUpResponse--',state.signUpResponse)
 
  return {
    signIn:state.signIn,
    common: state.common
  }
}

export default connect(mapStateToProps,null)(SplashScreen);