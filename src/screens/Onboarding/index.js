import React from 'react';
import {View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../router/routes';
import {Label, StatusBars} from '../../component';
import Color from '../../utils/Color';
import styles from './style';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';


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
class Onboarding extends React.Component{
 
  constructor(props) {
    super(props);

    this.state = {
      onBoardingDone:false
    };
  }

  // componentDidMount(){
  //   // console.log('isOnboardingDone--',this.props.isOnboardingDone)
  //   // if (this.props.isOnboardingDone!==null){
  //   //   this.setState({
  //   //     onBoardingDone:true
  //   //   })
  //   // }
  //   // else{
  //   //   this.setState({
  //   //     onBoardingDone:false
  //   //   })
  //   // }
  //   // }
  //    const isOnboardingDone = AsyncStorage.getItem('OnBoarding')
  //   //  let parsed = JSON.parse(isOnboardingDone);
  //   console.log('isOnboardingdone-async-',isOnboardingDone)
     
  //   if (isOnboardingDone.done!==null){
  //       this.setState({
  //         onBoardingDone:true
  //       })
  //     }
  //     else{
  //       this.setState({
  //         onBoardingDone:false
  //       })
  //     }

  // }

  onDone = () => {
    this.props.onDone();
  };

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
 render(){
  return (
    // <View>
    // {this.state.onBoardingDone ?
    
    //  this.props.navigation.push(Routes.SignIn)

    //   :

    <View style={{flex: 1}}>
   
      <StatusBars hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={this.RenderItem}
        onDone={this.onDone}
        renderDoneButton={this.RenderDoneButton}
        renderNextButton={this.RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    

    </View>
  //  }
  //  </View>
  );
 }
};



const mapStateToProps = state =>(
  {
    isOnboardingDone :state.onBoarding.done,
  }
)
export default connect(mapStateToProps,null)(Onboarding);