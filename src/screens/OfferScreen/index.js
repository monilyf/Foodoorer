import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Label, StatusBars} from '../../component';
import PromoScreen from './PromosScreen';
import RestaurantOfferScreen from './RestaurantOfferScreen';
import styles from './style';
import Color from '../../utils/Color';
import Routes from '../../router/routes'
const {width} = Dimensions.get('window');

class OfferScreen extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = type => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      // <View style={{ flex: 1 }}>
      <SafeAreaView style={{backgroundColor: Color.WHITE_SMOKE}}>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />

        <View style={styles.container}>
        <View style={styles.topTabContainer}>
          <View style={styles.tabContainer}>
            <Animated.View
              style={[
                styles.animatedStyle,
                {
                  transform: [
                    {
                      translateX,
                    },
                  ],
                },
              ]}
            />
            <TouchableOpacity
              style={[
                styles.tabStyle,
                {
                  borderRightWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              ]}
              onLayout={event =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 0}, () => this.handleSlide(xTabOne))
              }>
              <Label
                small
                bolder
                color={active === 0 ? Color.WHITE : Color.PRIMARY_DARK}>
                RESTAURANTS
              </Label>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabStyle,
                {
                  borderLeftWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              ]}
              onLayout={event =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 1}, () => this.handleSlide(xTabTwo))
              }>
              <Label
                small
                bolder
                color={active === 1 ? Color.WHITE : Color.PRIMARY_DARK}>
                PROMOS
              </Label>
            </TouchableOpacity>
          </View>
              </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Animated.View
              style={[styles.center,{
               
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }]}
              onLayout={event =>
                this.setState({
                  translateY: event.nativeEvent.layout.height,
                })
              }>
            
              {/* <View> */}
                <RestaurantOfferScreen  navigation={this.props.navigation} />
               
              {/* </View> */}
            </Animated.View>

            <Animated.View
              style={[styles.center,{
              
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }]}>
              {/* <View > */}
               <PromoScreen/>
              {/* </View> */}
            </Animated.View>
          </ScrollView>
        </View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

export default OfferScreen;
