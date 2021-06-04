import React, {Component} from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Color from '../../utils/Color';
import {Label, Header, StatusBars, ModalView} from '../../component';
import styles from './style';
import ThemeUtils from '../../utils/ThemeUtils';
import CommonStyle from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/FontAwesome'
import Routes from '../../router/routes';

export class OrderTracking extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      showModal: false,
    };
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({showModal:true})},5000);
      
  }

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
            <View style={{marginStart: 25}}>
              <Label>ORDER #102578000</Label>
              <Label xsmall color={Color.DARK_GRAY}>
                11:27 AM | 2 items, ₹248.00
              </Label>
            </View>
          </Header>

          <View style={{backgroundColor: Color.BOX_BG}}>
            <Image
              resizeMode="contain"
              source={require('../../assets/images/map.jpg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              // padding:15,
              paddingVertical:30,
              borderRadius: 10,
              shadowColor: Color.WHITE,
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
              bottom: 0,
            }}>
            <Image
              source={require('../../assets/images/mcD_logo.png')}
              style={{
                width: ThemeUtils.relativeHeight(5),
                height: ThemeUtils.relativeHeight(5),
              }}
            />
            <View style={{alignSelf: 'center'}}>
              <Label xsmall color={Color.DARK_GRAY}>
                SG highway, Ahmedabad
              </Label>
              {/* <View style={CommonStyle.divider}></View> */}
              <Label xsmall>Nachos x 1, Maharaja mac x 1</Label>
              <Label bolder small>
                ₹ 248.00
              </Label>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Label small color={Color.PRIMARY_DARK}>
                8:32 min{' '}
              </Label>
            </View>
          </View>
        </View>
        <ModalView visible={this.state.showModal} >
              <View style={[CommonStyle.modalStyle,{bottom:350,borderRadius:18,width:'85%',alignItems:'center'}]}>
                <Icon
                  name="thumbs-up"
                  size={65}
                  // style={{marginTop: 40}}
                  color={Color.PRIMARY}
                />
                <Label mt={10} xlarge color={Color.PRIMARY_DARK}>
                  Enjoy your food
                </Label>
                {/* <Label mt={20} large>
                  $50
                </Label>
                <Label mt={20} large>
                  Earned by you!
                </Label> */}
                <TouchableOpacity style={{marginTop: 10}} onPress={()=>{this.setState({showModal:false})
                this.props.navigation.push(Routes.Home)}}>
                  <Label color={Color.ACTIVE_COLOR} border={1} borderColor={Color.PRIMARY}>Done</Label>
           </TouchableOpacity>
            </View>
          </ModalView>
      </SafeAreaView>
    );
  }
}

export default OrderTracking;
