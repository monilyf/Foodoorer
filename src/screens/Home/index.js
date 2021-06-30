import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  StatusBars,
  ContentHeader,
  CategoryCard,
  ItemCard,
  DealsByRestaurant,
  Header,
  RestaurantCard,
  Label,
} from '../../component';
import Color from '../../utils/Color';
import styles from './style';
import CommonStyle from '../../utils/CommonStyle';
import Routes from '../../router/routes';
import {
  restaurants,
  category_Item,
  popular_Item,
} from '../../redux/Constants/data';
import ThemeUtils from '../../utils/ThemeUtils';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { restaurantAction } from '../../redux/reducers/Restaurant/action'
import apiUrl from '../../services/serverEndPoints';
import { categoriesAction } from '../../redux/reducers/Categories/action'


export class Home extends Component {





  componentDidMount() {
    // console.log('====================================');
    // console.log('token--', this.props.signIn);
    // console.log('====================================');
    // if (this.props.signIn !== null) {
    // debugger

    this.props.categoriesAction()
    setTimeout(() => {
      this.props.restaurantAction()
    }, 2000)
    // }

  }



  keyExtractor = (item, index) => item.id;

  constructor(props) {
    super(props);
    this.state = {
      token: this.props.signIn,
      scrollItemHorizontal: true,
      visibilityText: 'View all',
    };
  }

  renderTopCategories = item => {
    return (
      <CategoryCard

        title={item.name}
        image={apiUrl.categoriesImage + item.image}
        onPress={() => this.props.navigation.push(Routes.DetailedScreen, item)}
      />
    );
  };

  renderPopularItems = item => {
    return (
      <ItemCard
        onPress={() => this.props.navigation.push(Routes.RestaurantScreen)}
        title={item.title}
        image={item.image}
        foodMark={this.state.scrollItemHorizontal ? null : item.foodMark}
        by={item.by}
        price={item.price}
      />
    );
  };

  renderNearbyDeals = item => {
    return (
      <DealsByRestaurant
        onPress={() => this.props.navigation.push(Routes.RestaurantScreen)}
        image={item.image}
        title={item.title}
        description={item.description}
        original_price={item.original_price}
        new_price={item.new_price}
        discount={item.discount}
      />
    );
  };

  renderRestaurants = item => {
    console.log("image", apiUrl.restaurantImage + item.image)
    return (
      <RestaurantCard
        onPress={() => props.navigation.push(Routes.RestaurantScreen)}
        image={apiUrl.restaurantImage + item.image}
        area={item.address + ',' + item.city}
        // rating={item.rating}
        priceForOne={item.priceForOne}
        title={item.name}
      // description={item.description}
      // discount={item.discount}
      />
    );
  };


  render() {
    // console.log('-----`------home screen render ----------- state--', this.props.isOnboardingDone)

    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
        <View style={styles.container}>
          <Header iconName="location-outline" justifyContent="space-between">
            <TouchableOpacity

              onPress={() => this.props.navigation.push(Routes.SearchScreen)}
            >
              <View style={[
                {
                  // paddingRight: 30,
                  // paddingVertical:7,
                  paddingHorizontal: 15,
                  alignItems: 'center',
                  height: ThemeUtils.relativeHeight(6.5),
                  width: ThemeUtils.relativeHeight(38),//40
                  backgroundColor: Color.WHITE,
                  borderRadius: 6,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                },
                CommonStyle.shadowStyle,
              ]}>

                <Label color={Color.DARK_GRAY} small>Search for meals or area</Label>
                <Icon
                  name="search"
                  style={{ alignSelf: 'center' }}
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ContentHeader
              title="Top Categories"
              iconName="filter"
              text="Filter"
            />
            <View style={styles.listStyle}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                // data={category_Item}
                data={this.props.categories}
                renderItem={({ item }) => this.renderTopCategories(item)}
                keyExtractor={this.keyExtractor}
              />
            </View>

            <View style={styles.divider}></View>
            <ContentHeader
              title="Popular Items"
              text={this.state.visibilityText}
              onPress={() =>
                this.setState({
                  scrollItemHorizontal: !this.state.scrollItemHorizontal,
                  visibilityText: this.state.scrollItemHorizontal
                    ? 'Show less'
                    : 'View all',
                })
              }
            />

            <View style={styles.listStyle}>
              <FlatList
                horizontal={this.state.scrollItemHorizontal}
                style={{
                  marginRight: this.state.scrollItemHorizontal ? null : 30,
                }}
                showsHorizontalScrollIndicator={false}
                data={popular_Item}
                renderItem={({ item }) => this.renderPopularItems(item)}
                keyExtractor={this.keyExtractor}
              />
            </View>

            <View style={styles.divider}></View>
            <ContentHeader
              title="Nearby Deals"
              text="View all"
              onPress={() =>
                this.props.navigation.push(Routes.DetailedScreen, {
                  title: 'nearby deals',
                })
              }
            />

            <View style={styles.listStyle}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                renderItem={({ item }) => this.renderNearbyDeals(item)}
                keyExtractor={this.keyExtractor}
              />
            </View>

            <View style={styles.divider}></View>
            <ContentHeader
              title="Nearby Restaurants"
            />

            <View style={styles.listStyle, { marginLeft: 0, paddingBottom: 150 }}>
              <FlatList
                // horizontal
                showsHorizontalScrollIndicator={false}
                data={this.props.restaurant}
                // data={this.state.token}
                renderItem={({ item }) => this.renderRestaurants(item)}
              // keyExtractor={this.keyExtractor}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("---categories Data  Home Screen----------", state.categories.categories)
  return {
    restaurant: state.restaurant.restaurant,
    signIn: state.signIn.token,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    restaurantAction,
    categoriesAction
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;