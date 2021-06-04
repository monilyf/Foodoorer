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




class RestaurantScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 1,
      isAddButtonPressed: false,
      isCheckOutModalVisible: false,
      isRepeatSameModalVisible: false,
      cartItems:{

      },selectedId:[],
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
    return (
      <RestaurantItem
       key={item.id}
        image={item.image}
        foodMark={item.foodMark}
        itemName={item.itemName}
        description={item.description}
        price={item.price}>
          {/* item.id === this.state.selectedId */}
        { this.state.isAddButtonPressed
        
          ? (
          <ItemCountButton
            itemCount={this.state.itemCount}
            onPressMinus={() => {
              if (this.state.itemCount>1){
                this.setState({itemCount:this.state.itemCount-1})
              }
              else{
                this.setState({isAddButtonPressed: false,isCheckOutModalVisible:false})
              }
            }}
            onPressPlus={() => this.setState({isRepeatSameModalVisible: true})}
          />
        ) : (
          <AddButton
            onPress={() =>{ 
              // this.handleSelectionMultiple(item.id)
         

              this.setState({
                selectedId:item.id,
                selectedItem:{
        id:item.id,
        itemName:item.itemName,
        itemCount:this.state.itemCount,
        price:item.price,
      },
                isAddButtonPressed: true,
                isCheckOutModalVisible: true,
                // isRepeatSameModalVisible:true
              })
    console.log('--------selected id-jkj------',this.state.selectedItem)

              // this.handleSelection(item.id)
              
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
            image={require('../../assets/images/restaurant_screen/Icon_Fork.png')}
          />
        </View>

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

              <Label bolder large>
                Combo Meal
              </Label>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={combo_meals}
                renderItem={({item}) => this.renderMenuItem(item)}
                keyExtractor={item => item.id}
              />
             
            
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
                  {this.state.itemCount} Item | ₹ 157{' '}
                </Label>
                <Label xsmall color={Color.DARK_GRAY}>
                  Extra charges may apply
                </Label>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>this.props.navigation.push(Routes.CartScreen,this.state.selectedItem)}>
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
              <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>this.setState({isRepeatSameModalVisible:!this.state.isRepeatSameModalVisible,itemCount:this.state.itemCount+1})}>
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

export default RestaurantScreen;
