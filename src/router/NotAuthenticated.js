import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';

const Stack = createStackNavigator();

const NonAuthenticated = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={Routes.Onboarding}
        component={Onboarding}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={Routes.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ForgotPassword}
        component={ForgotPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Routes.ResetPassword}
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NonAuthenticated;
