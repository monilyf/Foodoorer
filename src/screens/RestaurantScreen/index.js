import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Share,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  StatusBars,
  ImageSlider,
  IconSqure,
  OfferTag,
  Label,
  RestaurantItem,
  ItemCountButton,
  AddButton,
  ModalView,
  ToastMessage,
} from '../../component';
import LinearGradient from 'react-native-linear-gradient';

import Color from '../../utils/Color';
import styles from './style';
import {recommended_items,combo_meals,restaurants_image_slider} from '../../redux/Constants/data';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Routes from '../../router/routes';
import {add_itemId_cart,add_item_details} from '../../redux/reducers/Cart/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';





class RestaurantScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 1,
      isAddButtonPressed: false,
      isCheckOutModalVisible: false,
      isRepeatSameModalVisible: false,
      userCartItemsIds:[],
      userCartItemsList:[],
      showDropDown:false,
      // selectedItem:{
      //   id:null,
      //   itemName:null,
      //   itemCount:null,
      //   price:null,
      // },
    };
  }

  // const renderItem = ({ item }) => {
  //   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //   const color = item.id === selectedId ? 'white' : 'black';

  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={{ backgroundColor }}
  //       textColor={{ color }}
  //     />
  //   );
  // };
  renderMenuItem = item => {
    let data = this.props.cartItemsList.find((item) => item.id === this.state.selectedId)

    return (
      <RestaurantItem
       key={item.id}
        image={item.image}
        foodMark={item.foodMark}
        itemName={item.itemName}
        description={item.description}
        price={item.price}>
          {/* this.state.isAddButtonPressed */}

          {/* item.id === this.state.selectedId */}
          {/* this.state.userCartItemsIds.includes(item.id) */}
          {/* this.state.userCartItems.map() */}
    {/* console.log('---------itemId------',item.id) */}
        { 
        this.state.userCartItemsIds.includes(item.id)
          ? (
          <ItemCountButton
            itemCount={data.quantity}
            onPressMinus={() => {
            //   let idx = this.props.cartItemsList.indexOf(item['id'])
            //   console.log('@@@@@@@@@@@@@    id true   @@@@@@@',item['id'],item)
            //  { this.props.cartItemIds.includes(this.state.selectedId) 
            //   console.log('#----#',this.props.cartItemIds,idx,'#######',this.props.cartItemsList.quantity,this.state.selectedId,this.props.cartItemIds.includes(this.state.selectedId) )

            //   if (this.props.cartItemsList[idx].quantity>1){
            //     this.setState({itemCount:this.props.cartItemsList.quantity-1})
            //   }
            //   else{
            //     // arr = arr.filter(item => item !== value)
            //     // this.setState({isAddButtonPressed: false,isCheckOutModalVisible:false})
            //   }}
            // var id = this.props.cartItemsList.find(item => item.id === this.state.selectedId);
            // this.props.cartItemsList.find((item) => item.id === this.state.selectedId)

            console.log('----------id---------',data.quantity)
            }}
            onPressPlus={() =>{ 
              this.props.cartItemIds === this.state.selectedId
              console.log('########',this.props.cartItemIds,'#######',this.state.selectedId)
                
              this.setState({isRepeatSameModalVisible: true})
              data.quantity+=1
              }}
          />
        ) : (
          <AddButton
            onPress={() =>{ 
              // this.handleSelectionMultiple(item.id)
              // this.selectItem(item)
console.log('id------------------',item.id)
console.log('id--------userCartItem----------',item.id,'==========',this.state.userCartItemsIds)

              // this.props.add_itemId_cart(item.id);
              // this.props.add_item_details({...item,"quantity":this.state.itemCount})
                  
              this.setState({
                selectedId:item.id,
                userCartItemsIds:[...this.state.userCartItemsIds,item.id],
                userCartItemsList:[...this.state.userCartItemsList,{...item,"quantity":this.state.itemCount}],
        //         selectedItem:{
        // id:item.id,
        // itemName:item.itemName,
        // itemCount:this.state.itemCount,
        // price:item.price,
      // },
                isAddButtonPressed: true,
                isCheckOutModalVisible: true,
                // isRepeatSameModalVisible:true
              })
    // console.log('--------selected id-jkj------',this.state.selectedId)

              // this.handleSelection(item.id)
// console.log('-userCartItemIDs-',item.id,'==========',this.state.userCartItemsIds)
// console.log('-userCartItem List-',item.id,'==========',this.state.userCartItemsList)
              
            }
            }
          />
        )}
      </RestaurantItem>
    );
  };


//   handleSelectionMultiple = (id) => {
//     var selectedIds = this.state.selectedId // clone state
//     console.log('--------selected id-------',selectedIds)
//     if(selectedIds.includes(id))
//       selectedIds = selectedIds.filter(_id => _id !== id)
//     else 
//       selectedIds.push(id)
 
//     this.setState({selectedId:selectedIds})
//  }



//   andleSelection = (id) => {
//     var selectedId = this.state.selectedId
//     console.log('selected id')
//     if(selectedId === id)
//       this.setState({selectedItem: null})
//     else 
//       this.setState({selectedItem: id})
//  }

   onShare = async () => {
    try {
      const result = await Share.share({
        message:
         '“McDonald’s: Get one FREE double cheeseburger when you purchase any…”'
      });
    }
 catch (error) {
    alert(error.message);
  }
}
  render() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~usercartItems Ids~~~~~~',this.state.userCartItemsIds)
    console.log('~~~~~~~~~~~~~~~~~~~~~~usercartItems List~~~~~~',this.state.userCartItemsList)
    return (
      <SafeAreaView style={{backgroundColor:Color.WHITE_SMOKE}}>
        <StatusBars
          hidden={true}
        />

        <ImageSlider images={restaurants_image_slider}/>

        <View style={styles.header}>
          <IconSqure
            style={{paddingHorizontal: 5}}
            image={require('../../assets/images/icon_back.png')}
            onPress={() => this.props.navigation.goBack()}
          />
          <IconSqure
            image={require('../../assets/images/restaurant_screen/Icon_Fork.png')} onPress={()=>{
              // this.setState({showDropDown:!this.state.showDropDown})
              this.props.navigation.push(Routes.DropDown)
              }}
          />
        </View>
        {/* {this.state.showDropDown?<DropDown/>:null} */}

        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infoContainer}>
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <View style={styles.rowContainer}>
                  <Label bolder large>
                    McDonald's
                  </Label>
                  <Image
                    style={CommonStyle.foodMark}
                    source={require('../../assets/images/icon_veg.png')}
                  />
                  <Image
                    style={CommonStyle.foodMark}
                    source={require('../../assets/images/icon_non_veg.png')}
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Icon name="heart-outline" color={Color.ERROR} size={26} />
                 <TouchableOpacity onPress={()=>{this.onShare()}}>
                 <Icon
                    name="share-social-outline"
                    style={{marginLeft: 10}}
                    color={Color.PRIMARY_DARK}
                    size={26}
                  />
                 </TouchableOpacity>
                </View>
              </View>

              <Label small color={Color.DARK_GRAY}>
                SG highway, Ahmedabad | 4 Km
              </Label>
              <View style={[CommonStyle.divider, styles.divider]}></View>

              <View style={styles.rowContainer}>
                <Icon name="star" color={Color.STAR} size={16} />
                <Label xsmall ms={10} color={Color.DARK_GRAY}>
                  4.1 Ratings + 500 + | ₹250 Cost for 2
                </Label>
              </View>
              <Label xsmall color={Color.DARK_GRAY} mt={7}>
                45 Mins (Delivery time)
              </Label>

              <OfferTag borderColor={Color.ERROR} backgroundColor={Color.LIGHT_GRAY} style={{marginTop:14}}>
              <Label xsmall pt={8} pb={8} color={Color.BLACK}>OFFER + 10% OFF ON ALL BEVERAGES</Label>
              </OfferTag> 
            </View>

            <View style={{paddingBottom:40}}>
              <Label bolder mt={5} mb={5} large>
                Recommended
              </Label>

              <FlatList
                showsVerticalScrollIndicator={false}
                data={recommended_items}
                extraData={this.state.selectedItem}
                renderItem={({item}) => this.renderMenuItem(item)}
                keyExtractor={item => item.id}
              />

              {/* <Label bolder large>
                Combo Meal
              </Label>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={combo_meals}
                renderItem={({item}) => this.renderMenuItem(item)}
                keyExtractor={item => item.id}
              /> */}
             
            
            </View>
          </ScrollView>
        </View>
     {this.state.isCheckOutModalVisible?
          <View style={styles.checkoutModal}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Label small bolder>
                  {this.state.userCartItemsIds.length} Item | ₹ 157{' '}
                </Label>
                <Label xsmall color={Color.DARK_GRAY}>
                  Extra charges may apply
                </Label>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}} 
              // onPress={()=>this.props.navigation.push(Routes.CartScreen,this.state.userCartItemsList)}
              onPress={()=>{this.props.add_itemId_cart(this.state.userCartItemsIds);
              this.props.add_item_details([...this.state.userCartItemsList])
              this.props.navigation.navigate(Routes.CartScreen)
              }}
              >
                <LinearGradient
                  colors={[Color.GRADIENT3, Color.GRADIENT4]}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={{
                    borderRadius: 6,
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                  }}>
                  <Label small color={Color.WHITE}>
                    CHECKOUT
                  </Label>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          :null}

      
        <ModalView visible={this.state.isRepeatSameModalVisible}>
          <View style={[CommonStyle.modalStyle,{backgroundColor:Color.WHITE_SMOKE,paddingHorizontal:0,paddingBottom:0}]}>
             <View style={{marginHorizontal:20}}>
             <Label bolder >Customize "Creamy nachos"</Label>    
              <Label bolder color={Color.DARK_GRAY} pb={15}>₹ 45</Label>
             </View>
              <View style={{backgroundColor:Color.WHITE,paddingVertical:15,paddingHorizontal:20}}>
              <Label small color={Color.DARK_GRAY}>Repeat last used customizaton?</Label> 
              <Label small bolder mt={4}>Double Mayonise, Bigger</Label> 
              <View style={[styles.rowContainer,{justifyContent:'space-between',marginVertical:20}]}>
              <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>this.setState({isRepeatSameModalVisible:!this.state.isRepeatSameModalVisible})}
              style={{
                    borderColor:Color.PRIMARY,
                    borderWidth:1,
                    borderRadius: 6,
                    paddingHorizontal: 30,
                    paddingVertical: 6,
                  }}
              >
                  <Label small  color={Color.PRIMARY}>
                    I'LL CHOOSE
                  </Label>
              </TouchableOpacity>
              <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>{ console.log('selected id---',this.state.selectedId,this.props.cartItemsList.id,this.props.cartItemsList.quantity)
                this.setState({isRepeatSameModalVisible:!this.state.isRepeatSameModalVisible,itemCount:this.state.itemCount+1})}}>
                <LinearGradient
                  colors={[Color.GRADIENT3, Color.GRADIENT4]}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={{
                    borderRadius: 6,
                    paddingHorizontal: 30,
                    paddingVertical: 6,
                  }}>
                  <Label small bolder color={Color.WHITE}>
                    REPEAT LAST
                  </Label>
                </LinearGradient>
              </TouchableOpacity>
              </View>
              </View>
          </View>
        </ModalView>
    
      </SafeAreaView>
    );
  }
}

// export default RestaurantScreen;
const mapStateToProps = state => ({

  // isOnboardingDone: state.onBoarding.val,
  cartItemsList:state.cart.cartItemDetails,
  cartItemIds:state.cart.cartItemId
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      add_item_details,add_itemId_cart
    },
    dispatch,
  );



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);

