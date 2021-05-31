import React, {Component} from 'react';
import {SafeAreaView, View, ScrollView, Image, TextInput} from 'react-native';
import {
  StatusBars,
  Header,
  CartItem,
  Label,
  HomeNavigator,
  Search,
  OfferTag,
  SubmitButton,
} from '../../component';
import Color from '../../utils/Color';
import styles from './style';
import CommonStyle from '../../utils/CommonStyle';
import ThemeUtils from '../../utils/ThemeUtils';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor:Color.WHITE_SMOKE}}>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
         <Header
            iconName="chevron-back-outline"
            onPress={() => this.props.navigation.goBack()}>
            {/* <Search style={CommonStyle.shadowStyle}/> */}
            <View style={{flexDirection: 'row', marginRight: 50}}>
              <Image
                resizeMode="contain"
                style={{
                  alignSelf: 'center',
                  height: ThemeUtils.relativeHeight(5.5),
                  width: ThemeUtils.relativeHeight(5.5),
                }}
                source={require('../../assets/images/mcD_logo.png')}
              />
              <View style={{marginStart: 15}}>
                <Label bolder>McDonald's</Label>
                <Label xsmall color={Color.DARK_GRAY}>
                  SG highway, Ahmedabad
                </Label>
              </View>
            </View>
          </Header>
        <View style={styles.container}>
         
          <ScrollView showsVerticalScrollIndicator={false}>
            <CartItem foodItemName="Creamy nachos" price="₹157.00" />
            <CartItem foodItemName="Maharaja mac  " price="₹106.00" />

            {/* --------------------Bill Component Strat (can make it as separate BillComponent)---------------- */}

            <View style={{marginTop: 20}}>
              <Label bolder mb={4}>
                Bill Details
              </Label>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 3,
                }}>
                <Label bolder xsmall color={Color.DARK_GRAY}>
                  Item Total
                </Label>
                <Label xsmall color={Color.PRIMARY_DARK}>
                  ₹226.50
                </Label>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 3,
                }}>
                <Label bolder xsmall color={Color.DARK_GRAY}>
                  Restaurant Charges
                </Label>
                <Label xsmall color={Color.PRIMARY_DARK}>
                  ₹30.00
                </Label>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 3,
                }}>
                <Label bolder xsmall color={Color.DARK_GRAY}>
                  Delivery Fee
                </Label>
                <Label xsmall color={Color.PRIMARY_DARK}>
                  ₹20.00
                </Label>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 3,
                }}>
                <Label bolder xsmall color={Color.DARK_GRAY}>
                  Offer 10% OFF
                </Label>
                <Label xsmall color={Color.PRIMARY_DARK}>
                  - ₹22.00
                </Label>
              </View>
              <View
                style={[
                  CommonStyle.endLine,
                  {marginHorizontal: 5, marginTop: 15},
                ]}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  ₹248.00
                </Label>
              </View>
              <View
                style={[
                  CommonStyle.endLine,
                  {marginHorizontal: 5, marginTop: 15},
                ]}></View>
            </View>
            {/* --------------------Bill Component End---------------- */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Icon name="edit" size={18} />
              <Label xsmall ms={15} color={Color.DARK_GRAY}>
                Any request for the restaurant?
              </Label>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop:15
              }}>
              {/* <View style={{borderWidth:1,borderStyle:'dashed',borderColor:Color.PRIMARY_DARK}}> */}
              <OfferTag borderColor={Color.PRIMARY_DARK} >
                <TextInput
                  placeholder="Enter discount code" 
                  style={{padding: 0,paddingVertical:1,paddingHorizontal:30}}
                />
              </OfferTag>
              {/* </View> */}
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() =>alert('goes to offer')}>
                <LinearGradient
                  colors={[Color.GRADIENT3, Color.GRADIENT4]}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={{
                    borderRadius: 6,
                    paddingHorizontal:40,
                    paddingVertical: 6,
                    
                  }}>
                  <Label small bolder color={Color.WHITE}>
                    APPLY
                  </Label>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <Label xsmall bolder mt={4}>Select a promo code</Label>
          </ScrollView>
          </View>

       {/* --------is user authenticted then show address------------------- */}
       {/* <View style={CommonStyle.checkoutModal}></View>
       <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <Icon name="home" color={Color.PRIMARY_DARK} size={20}/>
          
            <Label small bolder ms={10} color={Color.PRIMARY_DARK}>
              Home
            </Label>
          </View>
         
          <TouchableOpacity onPress={()=>alert('add address screen')}><Label xsmall>CHANGE</Label></TouchableOpacity>
        </View>
                

              <View style={{marginTop: 8, marginLeft: 20, marginRight: 30}}>
                <Label xsmall color={Color.DARK_GRAY}>
                  17, Sukomal Flats, Ramdev nagar, Satellite...
                </Label>
              </View> */}

             <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                 <Icon name="home" color={Color.PRIMARY_DARK} size={20}/>
          
          <Label small bolder ms={10} color={Color.PRIMARY_DARK}>
            Home
          </Label>
              </View>
          <TouchableOpacity onPress={()=>alert('add address screen')}><Label xsmall>CHANGE</Label></TouchableOpacity>
             
            </View>
           
                <Label xsmall color={Color.DARK_GRAY} mt={10}>
                  17, Sukomal Flats, Ramdev nagar, Satellite...
                </Label>
            <SubmitButton buttonText='MAKE PAYMENT'/>
          </View>

          <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>
                <Label bolder small color={Color.PRIMARY_DARK}>
                  To Pay
                </Label>

      </SafeAreaView>
    );
  }
}

export default CartScreen;
