import React from 'react'
import { View, Image } from 'react-native';
import Color from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {Label, OfferTag} from '../../component'


const PromosScreen = () => {
    return (
      <View>
          <View style={{
                     borderRadius: 10,
                     marginTop: 20,
                    //  marginHorizontal: 10,
                    paddingHorizontal:10,
                     marginVertical: 10,
                     backgroundColor:Color.WHITE
                   
              }}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Image source={require("../../assets/images/paytm_logo.png")} style={{width:ThemeUtils.relativeWidth(25),height:ThemeUtils.relativeHeight(10)}}/>
                
                  <OfferTag style={{padding:15}} borderColor={Color.ERROR}><Label >FREEDELPTM</Label></OfferTag>
                  </View>
                  <View style={{justifyContent:'flex-start'}}>
                  <Label mt={10} ms={10}   mb={10} small bolder color={Color.PRIMARY_DARK}>Get Unlimited free delivery using paytm</Label>
                  </View>
                  <Label mb={25} ms={10} color={Color.DARK_GRAY}  small>Use code FREEDELPTM & get free delivery on all orders above Rs.99</Label>
                  
                  <Label  ms={10} xsmall>Lorem ipsum dolor sit amet ,consectetur adipiscing elit.ut eget imperdietneque.In volutpat ante semper diarm molestie,etaliquam erat laoreet.</Label>
                   <View style={{flexDirection:'row',marginTop:10,marginStart:20,marginBottom:10}}>
                   <Label>CLOSE</Label>
                  <Icon name="chevron-up-outline"  size={20} />
                  </View>   
              </View>

              <View style={{  borderRadius: 10,
                     marginBottom: 10,
                    //  marginHorizontal: 10,
                    paddingHorizontal:10,
                     marginVertical: 10,
                     backgroundColor:Color.WHITE}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Image source={require("../../assets/images/google_pay_logo.png")} style={{width:ThemeUtils.relativeWidth(25),height:ThemeUtils.relativeHeight(10)}}/>
                  <OfferTag style={{padding:15}} borderColor={Color.ERROR}><Label >DELIVERY</Label></OfferTag>
                  
                  </View>
                  <View style={{justifyContent:'flex-start'}}>
                  <Label mt={10}  ms={10} mb={10} small bolder color={Color.PRIMARY_DARK}>Free Delivery for the first time user</Label>
                  </View>
               
                   <View style={{flexDirection:'row',marginTop:10,marginStart:10,marginBottom:10}}>
                   <Label>EXPAND</Label>
                  <Icon name="chevron-down-outline"  size={20} />
                  </View>

              </View>
              
      </View>
    )
}

export default PromosScreen
