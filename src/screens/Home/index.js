import React, {Component} from 'react';
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
  Search,
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

export class Home extends Component {
  keyExtractor = (item, index) => item.id;

  constructor(props) {
    super(props);

    this.state = {
      scrollItemHorizontal: true,
      visibilityText: 'View all',
    };
  }

  renderTopCategories = item => {
    return (
      <CategoryCard
        title={item.title}
        image={item.image}
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

  render() {
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
            
              onPress={()=>this.props.navigation.push(Routes.SearchScreen)}
            >
              <View   style={[
                {
                  // paddingRight: 30,
                  paddingVertical:7,
                  paddingHorizontal: 15,
                  backgroundColor: Color.WHITE,
                  borderRadius: 6,
                  flexDirection: 'row',
              justifyContent:'space-between'
                },
                CommonStyle.shadowStyle,
              ]}>
                
                <Label color={Color.DARK_GRAY}  large>Search for meals or area</Label>
                <Icon
                  name="search"
                  style={{alignSelf: 'center' }}
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
                data={category_Item}
                renderItem={({item}) => this.renderTopCategories(item)}
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
                renderItem={({item}) => this.renderPopularItems(item)}
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
                renderItem={({item}) => this.renderNearbyDeals(item)}
                keyExtractor={this.keyExtractor}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
