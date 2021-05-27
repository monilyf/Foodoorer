import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import Authenticated from './Authenticated';
import NotAuthenticated from './NotAuthenticated';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={Routes.Splash}>
          <Stack.Screen name={Routes.Splash} component={SplashScreen} />
          <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
          <Stack.Screen
            name={Routes.NotAuthenticated}
            component={NotAuthenticated}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigator;
