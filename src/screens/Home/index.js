import React, {Component} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {StatusBars,ContentHeader,CategoryCard,ItemCard,RestaurantCard} from '../../component';
import Color from '../../utils/Color';
import styles from './style';


const category_Item = [
  {id: 1, title: 'Burger', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 2, title: 'Dosa', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 3, title: 'Pizza', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 4, title: 'Pasta', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 5, title: 'Khaman', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 6, title: 'Bhel', image: require('../../assets/images/home_screen/burger.jpg')},
  {id: 7, title: 'Diet', image: require('../../assets/images/home_screen/diet.jpg')},
];

const nearby_deals = [
  {id:1,title:"McDonald's",image:require('../../assets/images/home_screen/nachos.jpg'),description:'Mexican Creamy nachos',original_price:'₹ 15.20',discount:'10% OFF',new_price:'₹ 13.20'},
  {id:2,title:"Domino's",image:require('../../assets/images/home_screen/pizza.jpg'),description:'Peppy Paneer pizza',original_price:'₹ 345.20',discount:'20% OFF', new_price:'₹ 275.16'},
  {id:3,title:"McDonald's",image:require('../../assets/images/home_screen/nachos.jpg'),description:'Mexican Creamy nachos',original_price:'₹ 15.20',discount:'10% OFF',new_price:'₹ 13.20'},
  {id:4,title:"Domino's",image:require('../../assets/images/home_screen/pizza.jpg'),description:'Peppy Paneer pizza',original_price:'₹ 345.20',discount:'20% OFF', new_price:'₹ 275.16'},

]


const popular_Item = [
  {
    id: 1,
    title: 'Grilled Chicken',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 2,
    title: 'Burger',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 3,
    title: 'Pizza',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 4,
    title: 'Pasta',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 5,
    title: 'Khaman',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 6,
    title: 'Bhel',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/burger.jpg'),
  },
  {
    id: 7,
    title: 'Diet',
    by: 'By XYZ',
    price: '₹ 16.45',
    image: require('../../assets/images/home_screen/diet.jpg'),
  },
];

export class Home extends Component {
  keyExtractor = (item, index) => item.id;

  renderTopCategories = item => {
    return (
      <CategoryCard title={item.title} image={item.image}/>
    );
  };

  renderPopularItems = item => {
    return (
      <ItemCard title={item.title} image={item.image} by={item.by} price={item.price} />
    );
  };

  renderNearbyDeals = item => {
    return (
      <RestaurantCard image={item.image} title={item.title} description={item.description} original_price={item.original_price} new_price={item.new_price} discount={item.discount}/>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE}
        />
        <View style={styles.container}>
          <ContentHeader title="Top Categories" iconName='filter' text='Filter'/>
          <View style={styles.listStyle}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={category_Item}
              renderItem={({item}) => this.renderTopCategories(item)}
              keyExtractor={this.keyExtractor}
            />
          </View>

          <View
            style={styles.divider}></View>
          <ContentHeader title='Popular Items' text='View all'/>

          <View style={styles.listStyle}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={popular_Item}
              renderItem={({item}) => this.renderPopularItems(item)}
              keyExtractor={this.keyExtractor}
            />
          </View>
          <View style={styles.divider}></View>
          <ContentHeader title='Nearby Deals' text='View all'/>

          <View style={styles.listStyle}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={nearby_deals}
              renderItem={({item}) => this.renderNearbyDeals(item)}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
