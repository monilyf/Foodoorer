import React from 'react';
import {View} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import SaleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../../../src/screens/Home';
import Color from '../../../utils/Color';
import Profile from '../../../../src/screens/Profile';
import CartScreen from '../../../screens/CartScreen';
import OfferScreen from '../../../screens/OfferScreen';
import Routes from '../../../router/routes';

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: Color.PRIMARY,borderTopLeftRadius:12 }}
      
      activeColor={Color.WHITE}
      inactiveColor={Color.PRIMARY_DARK}
      
      
    // tabBarOptions={{
    //   showLabel:false,
    //   style:{
    //     position:'absolute',
    //     backgroundColor:Color.PRIMARY,
    //     borderTopLeftRadius:14,
    //     borderTopRightRadius:14,
    //     paddingHorizontal:20
    //   }
    // }}
      
      
      >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarLabel: 'Explore',
          // tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <Icon1 name="shop" color={color} size={26} />
          ),
        }}
//         options={{
//   tabBarIcon:({focused})=>{
//     return (
// //       <Icon1 focused={focused}
// //       labeltext='Explore'
// //       iconname='shop'
// //       activeColor={Color.WHITE}
// // />
//       <View style={{flexDirection:'row',backgroundColor:Color.TRANSPARENT,justifyContent:'center'}}>
//         <Icon1 name='shop' color={Color.WHITE} size={26}/>
//         <Label ms={10} mt={3} small>Explore</Label>

//       </View>
//     )
//   }
// }} 


      />
      <Tab.Screen
        name="Offers"
        component={OfferScreen}
        options={{
          tabBarLabel: 'Offers',
          // tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <SaleIcon name="sale" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          // tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          // tabBarColor: Color.ALICE_BLUE,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
