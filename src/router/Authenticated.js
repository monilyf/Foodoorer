import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './routes';
import {HomeNavigator} from '../component';
import DetailedScreen from '../screens/DetailedScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import PaymentOptions from '../screens/PaymentOptions';
import ManageAddress from '../screens/ManageAddress';
import MyOrderScreen from '../screens/MyOrderScreen';

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
      <Stack.Screen 
        name={Routes.DetailedScreen}
        component={DetailedScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.RestaurantScreen}
        component={RestaurantScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.CartScreen}
        component={CartScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.SearchScreen}
        component={SearchScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.PaymentOptions}
        component={PaymentOptions}
        options={{headerShown:false}}
      />
       <Stack.Screen
        name={Routes.ManageAddress}
        component={ManageAddress}
        options={{headerShown:false}}
      />
       <Stack.Screen
        name={Routes.MyOrderScreen}
        component={MyOrderScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
