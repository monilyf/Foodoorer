import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {
  InputContainer,
  SubmitButton,
  Label,
  Logo,
  StatusBars,
} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PasswordValidate, validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import {createUser} from '../../redux/reducers/SignUp/action'
import { connect } from 'react-redux';
import {onBoardingDone} from '../../redux/reducers/OnBoarding/action'
import {CommonActions} from '@react-navigation/routers';
import {registerUserAction} from '../../redux/reducers/SignUp/action';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      isSecurePassword: true,
      isSecureConfirmPassword: true,
      toggleIcon1: 'eye',
      toggleIcon2: 'eye',
    };
  }

  handleOnSubmit = () => {
    let emailError, nameError, phoneError, passwordError, confirmPasswordError;
    let isValid;
    emailError = validation('email', this.state.email);
    nameError = validation('name', this.state.name);
    phoneError = validation('phoneNo', this.state.phone);
    passwordError = validation('password', this.state.password);
    confirmPasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmPassword,
    );

    if (
      emailError != null ||
      nameError != null ||
      phoneError != null ||
      passwordError != null ||
      confirmPasswordError != null
    ) {
      console.log('validation Error in Sign Up');
      this.setState({
        emailError: emailError,
        nameError: nameError,
        phoneError: phoneError,
        passwordError: passwordError,
        confirmPasswordError: confirmPasswordError,
      });
      isValid = false;
    } else {
      console.log('Sign Up Done');
      this.setState({
        emailError: '',
        nameError: '',
        phoneError: '',
        passwordError: '',
        confirmPasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let register_data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };
      // AsyncStorage.setItem('register_data', JSON.stringify(register_data));

      // console.log('async storage register_data:', register_data);
      // this.props.navigation.navigate(Routes.SignIn);
      
      this.signUpUserRequest();
    }
  };

  signUpUserRequest = async() => {
    console.log('signUpUserRequest')
    const {name,email,phone,password,confirmPassword} = this.state;
    // console.log('store register_data',name,email,password,phone);
    // this.props.createUser(register_data);
    let param={
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phone,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword

    }
    this.props.registerUserAction(param,this.props)
    // this.props.navigation.dispatch(this.resetToAuth);

  }
  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });

  handlePasswordToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon1: 'eye-closed'})
      : this.setState({isSecurePassword: true, toggleIcon1: 'eye'});
  };
  handleConfirmPasswordToggle = () => {
    this.state.isSecureConfirmPassword
      ? this.setState({
          isSecureConfirmPassword: false,
          toggleIcon2: 'eye-closed',
        })
      : this.setState({isSecureConfirmPassword: true, toggleIcon2: 'eye'});
  };

  render() {
    // console.log('store register_data',this.props.register);

    return (
      <SafeAreaView style={CommonStyle.container}>
        <StatusBars hidden={true} />

        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
         
            <KeyboardAwareScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={true}
              enableResetScrollToCoords={false}
              keyboardVerticalOffset={0}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always">
              <View style={{marginTop: 20, alignItems: 'center'}}>
                <Animatable.View animation="fadeInLeft" iterationDelay={400}>
                  <Logo />
                  <Label xxlarge align="center" bolder color={Color.WHITE}>
                    Welcome to All
                  </Label>
                </Animatable.View>
                <Animatable.View animation="fadeInUpBig" iterationDelay={400}>
                  <View style={CommonStyle.boxContainer}>
                    <View style={CommonStyle.tabScreen}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.push(Routes.SignIn);
                        }}>
                        <Label
                          large
                          ph={30}
                          bolder
                          color={Color.INACTIVE_COLOR}>
                          Sign In
                        </Label>
                      </TouchableOpacity>
                      <Label
                        large
                        ph={30}
                        border={4}
                        pb={5}
                        borderColor={Color.PRIMARY}
                        bolder
                        color={Color.ACTIVE_COLOR}>
                        Sign Up
                      </Label>
                    </View>

                    <View>
                      <InputContainer
                        iconName="person"
                        placeholder="Enter name"
                        iconColor={Color.PRIMARY_DARK}
                        onChangeText={text => this.setState({name: text})}
                      />
                      {this.state.nameError != null ? (
                        <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                          {this.state.nameError}
                        </Label>
                      ) : (
                        <Label></Label>
                      )}
                      {/* <Error>{this.state.nameError}</Error> */}

                      <InputContainer
                        iconName="email"
                        placeholder="Enter email"
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

                      <InputContainer
                        iconName="phone-android"
                        placeholder="Enter mobile "
                        iconColor={Color.PRIMARY_DARK}
                        keyboardType="phone-pad"
                        onChangeText={text => this.setState({phone: text})}
                      />
                      {this.state.phoneError != null ? (
                        <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                          {this.state.phoneError}
                        </Label>
                      ) : (
                        <Label></Label>
                      )}
                    </View>

                    <InputContainer
                      iconName="lock"
                      placeholder="Enter password"
                      iconColor={Color.PRIMARY_DARK}
                      onChangeText={text => this.setState({password: text})}
                      extraIconName={this.state.toggleIcon1}
                      secureText={this.state.isSecurePassword}
                      onToggle={() => this.handlePasswordToggle()}
                    />

                    {this.state.passwordError != null ? (
                      <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                        {this.state.passwordError}
                      </Label>
                    ) : (
                      <Label></Label>
                    )}

                    <InputContainer
                      iconName="lock"
                      placeholder="Retype password"
                      iconColor={Color.PRIMARY_DARK}
                      onChangeText={text =>
                        this.setState({confirmPassword: text})
                      }
                      extraIconName={this.state.toggleIcon2}
                      secureText={this.state.isSecureConfirmPassword}
                      onToggle={() => this.handleConfirmPasswordToggle()}
                    />
                    {this.state.confirmPasswordError != null ? (
                      <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                        {this.state.confirmPasswordError}
                      </Label>
                    ) : (
                      <Label></Label>
                    )}

                    <SubmitButton
                      onPress={() => {
                        this.handleOnSubmit();
                      }}
                      buttonText="Sign Up"
                    />
                  </View>
                </Animatable.View>
              </View>
            </KeyboardAwareScrollView>
     
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = state =>({
//   register:state.signUp.signUpResponse
// })

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      registerUserAction,
    },
    dispatch,
  );


export default connect(null,mapDispatchToProps)(SignUp);