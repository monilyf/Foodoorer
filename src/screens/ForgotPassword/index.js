import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/Color';
import {
  InputContainer,
  Label,
  SubmitButton,
  Logo,
  StatusBars,
} from '../../component';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import * as Animatable from 'react-native-animatable';

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
    };
  }

  handleOnSubmit = () => {
    let emailError;
    let isValid;
    emailError = validation('email', this.state.email);

    if (emailError != null) {
      console.log('error');
      this.setState({
        emailError: emailError,
        showToast: true,
      });
      isValid = false;
    } else {
      console.log('done');
      this.setState({
        emailError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.props.navigation.push(Routes.ResetPassword);
    }
  };

  render(props) {
    return (
      <SafeAreaView style={CommonStyle.container}>
        <StatusBars hidden={true} />
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyle.linearGradient}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
              enabled={Platform.OS === 'ios' ? true : false}>
              <View>
                <Animatable.View animation="fadeInLeft" iterationDelay={400}>
                  <Logo />
                </Animatable.View>
                <Animatable.View animation="fadeInUpBig" iterationDelay={400}>
                  <View style={CommonStyle.boxContainer}>
                    <Label color={Color.PRIMARY_DARK} align="center" xlarge>
                      Forgot your password?
                    </Label>

                    <Label color={Color.DARK_GRAY} mt={10} mb={15} small>
                      Enter your email for the verfication process. we will send
                      4 digits code to your email.
                    </Label>

                    <InputContainer
                      iconName="email"
                      placeholder="Enter email"
                      iconColor={Color.PRIMARY_DARK}
                      onChangeText={text => this.setState({email: text})}
                      keyboardType="email-address"
                    />
                    {this.state.emailError != null ? (
                      <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                        {this.state.emailError}
                      </Label>
                    ) : null}

                    <SubmitButton
                      onPress={() => {
                        this.handleOnSubmit();
                      }}
                      buttonText="Continue"
                    />
                  </View>
                </Animatable.View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
