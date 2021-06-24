import React, {useState} from 'react';
import {View, Image, FlatList, ScrollView} from 'react-native';
import {ContentHeader, Label} from '../../component';
import ThemeUtils from '../../utils/ThemeUtils';
import CommonStyle from '../../utils/CommonStyle';
import styles from './style';
import {
  FreeDeliveryItemCard,
  TodayOfferCard,
  AllOfferCard,
} from '../../component';
import {restaurants, offers} from '../../redux/Constants/data';
import Routes from '../../router/routes';
import Color from '../../utils/Color'

const discount_card_image = [
  {id: 1, source: require('../../assets/images/discount2.png')},
  {id: 2, source: require('../../assets/images/discount1.png')},
  {id: 3, source: require('../../assets/images/discount2.png')},
  {id: 4, source: require('../../assets/images/discount1.png')},
  {id: 5, source: require('../../assets/images/discount2.png')},
];

// const free_delivery_item = [
//   {id: 1, source: require('../../assets/images/home_screen/pizza2.jpg'),title:'Monginis Cake',type:'Desserts',rating:'4.1',time:'40-50 min',price:'₹ 114.00'},

// ];

class RestaurantOfferScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollItemHorizontal: true,
      visibilityText: 'View all',
    };
  }

  renderDiscountCard = item => {
    return (
      <Image
        source={item.source}
        resizeMode="cover"
        style={{
          height: ThemeUtils.relativeHeight(14),
          width: ThemeUtils.relativeHeight(35),
          borderRadius: 6,
          marginRight: 15,
        }}
      />
    );
  };

  renderTodaysOffers = item => {
    return (
      <TodayOfferCard
        onPress={() =>this.props.navigation.push(Routes.RestaurantScreen)}
        image={item.image}
        title={item.title}
        time={item.time}
        priceForOne={item.priceForOne}
        discount={item.discount}
        rating={item.ratings}
      />
    );
  };

  renderFreeDelivery = item => {
    return (
      <FreeDeliveryItemCard
        onPress={() => this.props.navigation.push(Routes.RestaurantScreen)}
        style={{
          // backgroundColor:Color.ALICE_BLUE,
            paddingRight: this.state.scrollItemHorizontal ? null : 110,
          }}
        title={item.title}
        image={item.image}
        rating={item.rating}
        time={item.time}
        price={item.price}
        // foodMark={this.state.scrollItemHorizontal ? null : item.foodMark}
        type={item.type}
        price={item.price}
      />
    );
  };

  renderAllOfferCard = item => {
    return (
      <AllOfferCard
        onPress={() => this.props.navigation.push(Routes.RestaurantScreen)}
        title={item.title}
        image={item.image}
        rating={item.rating}
        time={item.time}
        // description={item.description}
        type={item.type}
        costForTwo={item.costForTwo}
        offerType={item.offerType}
        discount={item.discount}
        offerTag={item.offerTag}
      />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={discount_card_image}
          renderItem={({item}) => this.renderDiscountCard(item)}
          keyExtractor={item => item.id}
        />

        <ContentHeader title="Today's Offers" style={{marginHorizontal: 0}} />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          renderItem={({item}) => this.renderTodaysOffers(item)}
          keyExtractor={item => item.id}
        />

        <ContentHeader
          title="Free Delivery*"
          text={this.state.visibilityText}
          onPress={() =>
            this.setState({
              scrollItemHorizontal: !this.state.scrollItemHorizontal,
              visibilityText: this.state.scrollItemHorizontal
                ? 'Show less'
                : 'View all',
            })
          }
          style={{marginHorizontal: 0}}
        />
<ScrollView horizontal={this.state.scrollItemHorizontal}   showsHorizontalScrollIndicator={false}>
        <FlatList
          //  horizontal={this.state.scrollItemHorizontal}
           contentContainerStyle={{alignSelf: 'flex-start'}}
          // style={{
          // // backgroundColor:Color.ALICE_BLUE,
          //   paddingRight: this.state.scrollItemHorizontal ? null : 30,
          // }}
        
          numColumns={this.state.scrollItemHorizontal?Math.ceil(offers.length / 2):1} 
          data={offers}
          renderItem={({item}) => this.renderFreeDelivery(item)}
          keyExtractor={item => item.id}
        />
        </ScrollView>
        <ContentHeader title="All offers" style={{marginHorizontal: 0}} />

        <FlatList
         
          showsVerticalScrollIndicator={false}
          data={offers}
          renderItem={({item}) => this.renderAllOfferCard(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default RestaurantOfferScreen;
