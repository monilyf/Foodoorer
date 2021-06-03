import React, {Component} from 'react';
import {Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {Color, CommonStyle, ThemeUtils} from '../../utils';
import {Header,StatusBars, Label} from '../../component';
import Icon from 'react-native-vector-icons/Feather';
import Routes from '../../router/routes';
import styles from './style'

const WalletsDetails =(props) =>{
  return(
    <TouchableOpacity
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    }}>
    <View
      style={{
        ustifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={props.image}
        style={{
          height: ThemeUtils.relativeHeight(5),
          width: ThemeUtils.relativeWidth(10),
          borderRadius: 10,
          alignSelf: 'center',
        }}
      />
      <Label small ms={20} color={Color.PRIMARY_DARK}>
       {props.walletName}
      </Label>
    </View>
    <TouchableOpacity>
    <Label xsmall color={Color.PRIMARY_DARK}>
      LINK ACCOUNT
    </Label>
    </TouchableOpacity>
  </TouchableOpacity>
  )
}

export class PaymentOptions extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor:Color.WHITE_SMOKE}}>
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
            <View style={{alignSelf: 'center',marginStart:30}}>
              <Label  bolder >
                PaymentOptions
              </Label>
             
              <Label xsmall color={Color.DARK_GRAY}>
               2 item(s),To pay:₹ 248.00
              </Label>
            
            </View>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ marginHorizontal: 20}}>
            <Label  bolder mb={10} color={Color.PRIMARY_DARK}>
              Wallets
            </Label>

          <WalletsDetails walletName='Amazon Pay' image={require('../../assets/images/payment_screen/amazon.png')}/>
          <WalletsDetails walletName='Paytm' image={require('../../assets/images/payment_screen/paytm.png')}/> 
          <WalletsDetails walletName='PayPal' image={require('../../assets/images/payment_screen/paypal.png')}/>
          <WalletsDetails walletName='Google Pay' image={require('../../assets/images/payment_screen/google_pay.png')}/>

</View>       
        <View
          style={{
            backgroundColor: Color.WHITE_SMOKE,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <View style={{marginHorizontal: 20}}>
            <Label  bolder mb={10} color={Color.PRIMARY_DARK}>
              Credit/Debit Card
            </Label>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
              }}>
             <TouchableOpacity onPress={()=>this.props.navigation.push(Routes.AddNewCard)}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
               
                <Icon name="plus" size={20} />
                <Label small ms={10} color={Color.PRIMARY_DARK}>
                  ADD NEW CARD
                </Label>
    
              </View>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                
                  
                }}>
                <Image
                  source={require('../../assets/images/payment_screen/visa.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(2.2),
                    width: ThemeUtils.relativeHeight(8),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                <Image
                  source={require('../../assets/images/payment_screen/master_card.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(2.2),
                    width: ThemeUtils.relativeWidth(8),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{
            backgroundColor: Color.WHITE_SMOKE,
            borderRadius: 20,
            marginTop: 20,
          }}>
              <View style={{marginHorizontal: 20}}>
                    <Label bolder mb={10} color={Color.PRIMARY_DARK}>
                        Net Banking
                    </Label>
                </View>
        <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                marginHorizontal:10,
              }}>
             <TouchableOpacity style={{flexDirection:'row'}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal:10,
                }}>
                 <Image
                  source={require('../../assets/images/payment_screen/Logogram1.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(5),
                    width: ThemeUtils.relativeWidth(10),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                 <Label normal mt={5} color={Color.PRIMARY_DARK}>
                  SC
                </Label>
    
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal:10,
                }}>
                 <Image
                  source={require('../../assets/images/payment_screen/Logogram.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(5),
                    width: ThemeUtils.relativeWidth(10),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                 <Label normal mt={5} color={Color.PRIMARY_DARK}>
                  BB
                </Label>
    
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal:10,
                }}>
                 <Image
                  source={require('../../assets/images/payment_screen/indonesia_bank.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(5),
                    width: ThemeUtils.relativeWidth(10),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                 <Label normal mt={5} color={Color.PRIMARY_DARK}>
                  BJB
                </Label>
    
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal:10,
                }}>
                 <Image
                  source={require('../../assets/images/payment_screen/bukopin_bank.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(5),
                    width: ThemeUtils.relativeWidth(10),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                 <Label normal mt={5} color={Color.PRIMARY_DARK}>
                  CIMB
                </Label>
    
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal:10,
                }}>
                 <Image
                  source={require('../../assets/images/payment_screen/HSBC.png')}
                  style={{
                    height: ThemeUtils.relativeHeight(5),
                    width: ThemeUtils.relativeWidth(10),
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
                 <Label normal mt={5} color={Color.PRIMARY_DARK}>
                  HSBC
                </Label>
    
              </View>
            

              </TouchableOpacity>
              
            </View>
            <View style={CommonStyle.endLine}/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                marginHorizontal:20,
              }}>
                <Label xsmall color={Color.PRIMARY_DARK}>MORE BANKS</Label>
                <View>
                    <Icon name="chevron-right" size={20}/>
                </View>
            </View>

            
       


        </View>
        <View style={{
            backgroundColor: Color.WHITE_SMOKE,
            borderRadius: 20,
            marginTop: 20,
          }}>
              <View style={{marginHorizontal: 20}}>
                    <Label bolder mb={10} color={Color.PRIMARY_DARK}>
                        Pay On Delivery 
                    </Label>
                </View>
                <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                marginHorizontal:20,
              }}>
                <Label xsmall color={Color.PRIMARY_DARK}>Cash Only</Label>
                <View>
                    <Icon name="circle" size={20} color={Color.ERROR}/>
                </View>
            </View>

        </View>
        <Label></Label>
      
        

        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

export default PaymentOptions;
