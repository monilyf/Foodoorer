import React, {Component} from 'react';
import {SafeAreaView, View, ScrollView,FlatList, Image, TextInput, Touchable} from 'react-native';
import {
  StatusBars,
  Header,
  CartItem,
  Label,
  HomeNavigator,
  ModalView,
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
import Routes from '../../router/routes';
import route from '@react-navigation/routers'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class CartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 1,
      cartItemDetails:null,
      isPaymentDoneModal:false,
      showToast:false
    };
  }

//  payemntDoneModal = (state)=>{
//    return(
    
//    )
// //  }
  // componentDidMount(){
  //   const { cartItemDetails } = this.props.route.params;
  //   this.setState({cartItemDetails:cartItemDetails})
  // }

  renderCartItem =()=>{
    return(
      <CartItem
      // foodItemName={this.state.cartItemDetails.itemName}
      // price={this.state.cartItemDetails.price}
      // itemCount={this.state.cartItemDetails.quantity}
      // onPressPlus={() =>
      //   this.setState({itemCount: this.state.cartItemDetails.quantity + 1})
      // }
      // onPressMinus={() => {
      //   if (this.state.itemCount > 1) {
      //     this.setState({itemCount: this.state.cartItemDetails.quantity - 1});
      //   } else {
      //     this.setState({itemCount: this.state.cartItemDetails.quantity});
      //   } //set logic here
      // }}
    />
    )
  }
  render() {
    console.log('hiiiiii')
    // console.log('this.props---',this.props)
    // console.log('this.props.route---',this.props.route)
    // console.log('this.props.route.params---',this.props.route.params)
    // const { one, two} = this.props.route.params;
    // console.log('hello from params=====-=-=-=-=-',one,two)
    // this.setState({cartItemDetails:cartItemDetails})
    // console.log('-----------this.props.cartItemIds------',this.props.cartItemId)
    console.log('-----------this.props.cartItemList------',this.props.cartItemsList)
    return (
      <SafeAreaView >
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
        <Header
          iconName="chevron-back-outline" justifyContent='space-between'
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
            <View style={{marginStart: 15,alignContent:'center'}}>
              <Label bolder>McDonald's</Label>
              <Label xsmall color={Color.DARK_GRAY}>
                SG highway, Ahmedabad
              </Label>
            </View>
          </View>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
          <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.cartItemDetails}
                extraData={this.state.selectedItem}
                renderItem={({item}) => this.renderCartItem(item)}
                keyExtractor={item => item.id}
              />
            {/* <CartItem
              foodItemName="Creamy nachos"
              price="₹157.00"
              itemCount={this.state.itemCount}
              onPressPlus={() =>
                this.setState({itemCount: this.state.itemCount + 1})
              }
              onPressMinus={() => {
                if (this.state.itemCount > 1) {
                  this.setState({itemCount: this.state.itemCount - 1});
                } else {
                  this.setState({itemCount: 1});
                } //set logic here
              }}
            /> */}
            {/* <CartItem
              foodItemName="Maharaja mac  "
              price="₹106.00"
              itemCount="1"
            /> */}

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
                marginTop: 15,
              }}>
              {/* <View style={{borderWidth:1,borderStyle:'dashed',borderColor:Color.PRIMARY_DARK}}> */}
              <OfferTag borderColor={Color.PRIMARY_DARK}>
                <TextInput
                  placeholder="Enter discount code"
                  style={{
                    padding: 0,
                    paddingVertical: 1,
                    // paddingHorizontal: 40,
                    paddingLeft:10,
                    width:ThemeUtils.relativeHeight(25),
                  }}
                />
              </OfferTag>
              {/* </View> */}
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {alert('Code Applied')}}>
                <LinearGradient
                  colors={[Color.GRADIENT3, Color.GRADIENT4]}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={{
                    borderRadius: 6,
                    // alignItems:'center',
                    // paddingHorizontal: 40,
                  width:ThemeUtils.relativeHeight(16),

                    paddingVertical: 6,

                  }}>
                  <Label small bolder align='center' color={Color.WHITE}>
                    APPLY
                  </Label>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <TouchableOpacity  onPress={() => this.props.navigation.push(Routes.CouponAppliedScreen)}>
              <Label xsmall bolder mt={4}>
              Select a promo code
            </Label>
            </TouchableOpacity>
            {/* </ScrollView> */}
          </View>

          {/* --------is user authenticted then show address------------------- */}

          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Icon name="home" color={Color.PRIMARY_DARK} size={20} />

                <Label small bolder ms={10} color={Color.PRIMARY_DARK}>
                  Home
                </Label>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.push(Routes.ManageAddress)}>
                <Label xsmall>CHANGE</Label>
              </TouchableOpacity>
            </View>

            <Label xsmall color={Color.DARK_GRAY} mt={10}>
              17, Sukomal Flats, Ramdev nagar, Satellite...
            </Label>

            <SubmitButton buttonText="MAKE PAYMENT" 
                        style={{width: ThemeUtils.relativeHeight(47)}}

            onPress={()=>{
              this.props.navigation.push(Routes.PaymentOptions)
            // this.payemntDoneModal(this.setState({isPaymentDoneModal:true}))
            }}/>
            <Label></Label>
            <Label></Label>
            <Label></Label>

            
          </View>
          
        </ScrollView>
        <HomeNavigator />
      </SafeAreaView>
    );
  }
}

// export default CartScreen;
const mapStateToProps = state => ({

  // isOnboardingDone: state.onBoarding.val,
  cartItemsList:state.cart,
  // cartItemIds:state.cart.cartItemId
});

// const mapDispatchToProps = dispatch => 
//   bindActionCreators(
//     {
//       add_item_details,add_itemId_cart
//     },
//     dispatch,
//   );



export default connect(mapStateToProps, null)(CartScreen);


