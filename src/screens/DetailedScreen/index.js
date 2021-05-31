import React, {Component} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
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
import {restaurants} from '../../redux/Constants/data'
import Routes from '../../router/routes';
import CommonStyle from '../../utils/CommonStyle';


const DetailedScreen =(props,{navigation})=> {
  const keyExtractor = (item, index) => item.id;

  const  {title,image}  = props.route.params;

  const renderRestaurants = item => {
    return (
      <RestaurantCard
      onPress={()=>props.navigation.navigate(Routes.RestaurantScreen)}
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
        <Header iconName='chevron-back-outline'onPress={()=>props.navigation.goBack()}>
        <Search style={CommonStyle.shadowStyle}/>
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
