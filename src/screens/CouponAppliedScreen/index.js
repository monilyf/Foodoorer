import React from 'react';
import {View, SafeAreaView, ScrollView,TextInput, TouchableOpacity,Image} from 'react-native';
import {
  Label,
  StatusBars,
  Header,
  SubmitButton,
  OfferTag,
  InputContainer,
} from '../../component';
import Color from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyle from '../../utils/CommonStyle';

class CouponAppliedScreen extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     modalVisible: false,
  //   };
  // }
  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
        <View style={styles.container}>
          <Header
            iconName="chevron-back-outline"
            onPress={() => this.props.navigation.goBack()}>
            {/* <Search style={CommonStyle.shadowStyle}/> */}
            <View style={{alignSelf: 'center'}}>
              <Label ms={30} bolder large>
                Enter discount code
              </Label>
            </View>
          </Header>
        
          <Label ms={20} color={Color.PRIMARY_DARK}mb={10}>Enter discount code</Label>
                  <View style={{borderColor:Color.DARK_GRAY,borderRadius:6,borderWidth:1,marginHorizontal:20}}>
                  <TextInput value='GET40OFF' style={{fontWeight:'bold',paddingHorizontal:20}}/>
                  </View>
                  <SubmitButton
            buttonText="APPLY NOW!"
            style={{width: ThemeUtils.relativeHeight(47)}}
            onPress={() =>
              this.props.navigation.goBack()
            }
          />
          <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20}}>
          <View style={{
                     borderRadius: 10,
                     marginTop: 20,
                    //  marginHorizontal: 10,
                    paddingHorizontal:10,
                     marginVertical: 10,
                     backgroundColor:Color.WHITE
                   
              }}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Image source={require("../../assets/images/paytm_logo.png")} style={{width:ThemeUtils.relativeHeight(15),height:ThemeUtils.relativeHeight(10)}}/>
                
                  <OfferTag style={{padding:10}} borderColor={Color.ERROR} ><Label small>FREEDELPTM</Label></OfferTag>
                  </View>
                  <View style={{justifyContent:'flex-start'}}>
                  <Label mt={10} ms={10}   mb={10} small bolder color={Color.PRIMARY_DARK}>Get Unlimited free delivery using paytm</Label>
                  </View>
                  <Label mb={25} ms={10} color={Color.DARK_GRAY}  small>Use code FREEDELPTM & get free delivery on all orders above Rs.99</Label>
                  
                  <Label  ms={10} xsmall color={Color.DARK_GRAY}>Lorem ipsum dolor sit amet ,consectetur adipiscing elit.ut eget imperdietneque.In volutpat ante semper diarm molestie,etaliquam erat laoreet.</Label>
                   <TouchableOpacity style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                   <Label ms={10} xsmall>CLOSE</Label>
                  <Icon name="chevron-up-outline"  size={20} />
                  </TouchableOpacity>   
              </View>
              <View style={{
                     borderRadius: 10,
                     marginTop: 20,
                    //  marginHorizontal: 10,
                    paddingHorizontal:10,
                     marginVertical: 10,
                     backgroundColor:Color.WHITE
                   
              }}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Image source={require("../../assets/images/google_pay_logo.png")} style={{width:ThemeUtils.relativeHeight(15),height:ThemeUtils.relativeHeight(10)}}/>
                
                  <OfferTag style={{padding:10}} borderColor={Color.ERROR} ><Label small>DELIVERY</Label></OfferTag>
                  </View>
                  <View style={{justifyContent:'flex-start'}}>
                  <Label mt={10} ms={10}   mb={10} small bolder color={Color.PRIMARY_DARK}>Free Delivery for the first time users</Label>
                  </View>
                  {/* <Label mb={25} ms={10} color={Color.DARK_GRAY}  small>Use code FREEDELPTM & get free delivery on all orders above Rs.99</Label> */}
                  
                  {/* <Label  ms={10} xsmall color={Color.DARK_GRAY}>Lorem ipsum dolor sit amet ,consectetur adipiscing elit.ut eget imperdietneque.In volutpat ante semper diarm molestie,etaliquam erat laoreet.</Label> */}
                   <TouchableOpacity style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                   <Label ms={10} xsmall>EXPAND</Label>
                  <Icon name="chevron-down-outline"  size={20} />
                  </TouchableOpacity>   
              </View>
            </ScrollView>
            </View>
      </SafeAreaView>
    );
  }
}

export default CouponAppliedScreen;
