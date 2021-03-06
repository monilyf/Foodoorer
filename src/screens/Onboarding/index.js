import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../router/routes';
import {Label, StatusBars} from '../../component';
import Color from '../../utils/Color';
import styles from './style';

const Onboarding = ({navigation}) => {
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

  const onDone = () => {
    props.onDone();
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={styles.icon} />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SignIn)}>
        <View style={styles.buttonCircle}>
          <Icon name="thumbs-up" style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  const RenderItem = ({item}) => {
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

  return (
    <View style={{flex: 1}}>
      <StatusBars hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default Onboarding;
