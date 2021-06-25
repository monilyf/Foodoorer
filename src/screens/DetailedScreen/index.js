import React, {Component} from 'react';
import {FlatList, SafeAreaView, ScrollView, View,TouchableOpacity} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
  StatusBars,
  RestaurantCard,
  Header,
  Label,
  Search,
} from '../../component';
import Color from '../../utils/Color';
import styles from './style';
import {restaurants} from '../../redux/constants/data'
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/Feather';
import ThemeUtils from '../../utils/ThemeUtils'



const DetailedScreen =(props,{navigation})=> {
  const keyExtractor = (item, index) => item.id;

  const  {title,image}  = props.route.params;

  const renderRestaurants = item => {
    return (
      <RestaurantCard
      onPress={()=>props.navigation.push(Routes.RestaurantScreen)}
        image={item.image}
         area={item.area}
         rating={item.rating}
        priceForOne={item.priceForOne}
        title={item.title}
        description={item.description}
        discount={item.discount}
      />
    );
  };

  
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
        <View style={styles.container}>
        <Header iconName='chevron-back-outline' justifyContent='space-between' onPress={()=>props.navigation.goBack()}>
        <TouchableOpacity
              onPress={() => props.navigation.push(Routes.SearchScreen)}>
              <View
                style={[
                {
                  // paddingRight: 30,
                  // paddingVertical:7,
                  paddingHorizontal: 15,
                  alignItems:'center',
                  height:ThemeUtils.relativeHeight(6.5),
                  width:ThemeUtils.relativeHeight(38),//36
                  backgroundColor: Color.WHITE,
                  borderRadius: 6,
                  flexDirection: 'row',
              justifyContent:'space-between'
                },
                  CommonStyle.shadowStyle,
                ]}>
                <Label color={Color.DARK_GRAY}  small>
                  Search for meals or area
                </Label>
                <Icon name="search" style={{alignSelf: 'center'}} size={20} />
              </View>
            </TouchableOpacity>
        </Header>
      
          <Label bolder ms={20} mb={7}>Top restaurants delivering{' '} {title}</Label>

          <ScrollView showsVerticalScrollIndicator={false}>
        
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={restaurants}
              renderItem={({item}) => renderRestaurants(item)}
              keyExtractor={keyExtractor}
            />

          </ScrollView>
        </View>
      </SafeAreaView>
    );
  
}

export default DetailedScreen;
