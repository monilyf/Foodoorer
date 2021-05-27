import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Home';
import Color from '../../utils/Color';
import Profile from '../../screens/Profile';
import Routes from '../../router/routes';

const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      creenOptions={{
        tabBarOptions: {
          style: {
            backgroundColor: Color.PRIMARY,
          },
        },
      }}
      activeColor={Color.ACTIVE_COLOR}
      inactiveColor={Color.DARK_GRAYISH_BLUE}>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <Icon1 name="shop" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Home}
        options={{
          tabBarLabel: 'Delivery',
          tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <Icon name="location-arrow" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={Home}
        options={{
          tabBarLabel: 'Histroy',
          tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <Icon name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
