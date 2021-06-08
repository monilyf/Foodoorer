import React, { Component } from 'react'
import {  View,Image,TouchableOpacity } from 'react-native'
import {StatusBars,Label} from '../../component'
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './style'
import Color from '../../utils/Color'
import Icon from 'react-native-vector-icons/FontAwesome';


const slides = [
    {
      key: 's1',
      title: 'Find Foods You Want',
      text: 'Discover the best foods from nearest restaurants.',
      image: require('../../assets/images/order_food.png'),
    },
    {
      key: 's2',
      title: 'Live Tracking',
      text: 'Real time tracking of your food order on the app.',
      image: require('../../assets/images/payment.png'),
    },
    {
      key: 's3',
      title: 'Fast Delivery',
      text: 'Fast delivery to your home, office and wherever you are. ',
      image: require('../../assets/images/food_delivery.png'),
    },
  ];

export class Onboardingscreen extends Component {
    


  RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={styles.icon} />
      </View>
    );
  };

  RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(Routes.SignIn)}>
        <View style={styles.buttonCircle}>
          <Icon name="thumbs-up" style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  RenderItem = ({item}) => {
    return (

        <View style={styles.container}>
        <Image
          style={styles.introImageStyle}
          source={item.image}
          resizeMode="contain"
        />
        <Label
          xlarge
          bolder
          color={Color.ONBOARDING_TEXT}
          align="center"
          letterSpacing={1}>
          {item.title}
        </Label>

        <View style={{marginHorizontal: 20}}>
          <Label align="center" large color={Color.ONBOARDING_TEXT} mb={10}>
            {item.text}
          </Label>
        </View>
      </View>
      
    );
  };
    render() {
        return (
            <View style={{flex: 1}}>
   
      <StatusBars hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={this.RenderItem}
        onDone={this.props.onDone}
        renderDoneButton={this.RenderDoneButton}
        renderNextButton={this.RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    

    </View>
        )
    }
}

export default Onboardingscreen
