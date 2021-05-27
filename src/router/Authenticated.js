import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './routes';
import HomeNavigator from '../screens/HomeNavigator';

const Stack = createStackNavigator();

const Authenticated = () => {
  console.log('Form Authenticated');
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name={Routes.Home}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
