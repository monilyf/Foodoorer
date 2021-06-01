import React from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity,Image} from 'react-native';
import {
  Label,
  StatusBars,
  Header,
  SubmitButton,
  SmallButton,
  ModalView,
  InputContainer,
} from '../../component';
import Color from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyle from '../../utils/CommonStyle';

class ManageAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
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
            {/* <Search style={CommonStyle.shadowStyle}/> */}
            <View style={{alignSelf: 'center'}}>
              <Label ms={30} bolder large>
                Manage Address
              </Label>
            </View>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.addressView}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                }}>
                <Icon name="home" color={Color.PRIMARY_DARK} size={25} />

                <Label bolder ms={10} color={Color.PRIMARY_DARK}>
                  Home
                </Label>
              </View>

              <Label small  color={Color.DARK_GRAY} mt={10}>
                17, Sukomal Flats, Ramdev Nagar cross road, Satellite, Ahmedabad{' '}
              </Label>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                 
                }}>
                <SmallButton buttonText="EDIT" onPress={() => alert('edit')} />
                <SmallButton
                  buttonText="DELETE"
                  onPress={() => alert('delete')}
                />
              </View>
            </View>

            <View style={styles.addressView}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                }}>
                <Icon name="suitcase" color={Color.PRIMARY_DARK} size={25} />

                <Label bolder ms={10} color={Color.PRIMARY_DARK}>
                  Office
                </Label>
              </View>

              <Label small  color={Color.DARK_GRAY} mt={10}>
                107, XYZ, Panjrapol cross road, Ambawadi, Ahmedabad{' '}
              </Label>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
               
                }}>
                <SmallButton buttonText="EDIT" onPress={() => alert('edit')} />
                <SmallButton
                  buttonText="DELETE"
                  onPress={() => alert('delete')}
                />
              </View>
            </View>
          </ScrollView>
          <SubmitButton
            buttonText="ADD NEW"
            style={{width: ThemeUtils.relativeHeight(47)}}
            onPress={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }
          />
        
        </View>

        <ModalView
          visible={this.state.modalVisible}
          onRequestClose={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }>
          <View style={CommonStyle.modalStyle}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Label color={Color.PRIMARY_DARK} bolder mb={12} large>
                ADD ADDRESS
              </Label>
              <TouchableOpacity
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <Icon
                  name="close"
                  size={25}
                  style={{alignSelf: 'center'}}
                  color={Color.PRIMARY_DARK}
                />
              </TouchableOpacity>
            </View>
            <Label color={Color.PRIMARY_DARK} ms={22} mb={5} small>
              House/ Floor number/ Block
            </Label>

            <InputContainer
              iconName="home"
              placeholder="I-104"
              maxlength={4}
              iconColor={Color.PRIMARY_DARK}
              // keyboardType="phone-pad"
              // onChangeText={text => this.setState({phone: text})}
            />
            {/* {this.state.phoneError != null ? (
              <Label small mt={5} mb={7} ms={21} color={Color.ERROR}>
                {this.state.phoneError}
              </Label>
            ) : (
              <Label></Label>
            )} */}

            <Label color={Color.PRIMARY_DARK} ms={22} mb={7} small>
              Street Address
            </Label>
            <InputContainer
              iconName="home"
              placeholder="Sukomal Flats..."
              iconColor={Color.PRIMARY_DARK}
              // onChangeText={text => this.setState({email: text})}
            />
            {/* {this.state.emailError != null ? (
              <Label small mt={5} mb={5} ms={21} color={Color.ERROR}>
                {this.state.emailError}
              </Label>
            ) : (
              <Label></Label>
            )} */}
            <Label color={Color.PRIMARY_DARK} ms={22} mb={7} small>
              Area
            </Label>
            <InputContainer
              iconName="home"
              placeholder="Satellite"
              iconColor={Color.PRIMARY_DARK}
              // onChangeText={text => this.setState({email: text})}
            />
             <Label color={Color.PRIMARY_DARK} ms={22} mb={7} small>
              Pincode
            </Label>
            <InputContainer
              iconName="home"
              placeholder="380015"
              iconColor={Color.PRIMARY_DARK}
              // onChangeText={text => this.setState({email: text})}
            />
            <View>
              
            </View>
            <SubmitButton
              onPress={() => this.setState({modalVisible:!this.state.modalVisible})}
              buttonText="SAVE"
            />
          </View>
        </ModalView>
      </SafeAreaView>
    );
  }
}

export default ManageAddress;
