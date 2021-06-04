import React from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity,FlatList} from 'react-native';
import {
  Label,
  StatusBars,
  Header,
  SubmitButton,
  SmallButton,
  ModalView,
  InputContainer,ToastMessage
} from '../../component';
import Color from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyle from '../../utils/CommonStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const address_details = [
  {id:1,addressType:'Home',address:'17, Sukomal Flats, Ramdev Nagar cross road, Satellite, Ahmedabad',icon:'home'},
  {id:2,addressType:'Office',address:'107, XYZ, Panjrapol cross road, Ambawadi, Ahmedabad',icon:'suitcase'},
]


class ManageAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible:false,
      showToast:false,
    };
  }

  renderAddress = (item) =>{
    return(
      <View style={styles.addressView}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}>
        <Icon name={item.icon} color={Color.PRIMARY_DARK} size={25} />

        <Label bolder ms={10} color={Color.PRIMARY_DARK}>
          {item.addressType}
        </Label>
      </View>

      <Label small  color={Color.DARK_GRAY} mt={10}>
        {item.address}{' '}
      </Label>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
         
        }}>
        <SmallButton buttonText="EDIT" onPress={() => {
            this.setState({showToast:true})
            setTimeout(()=>{
            this.setState({showToast:false})},2000)
        }} />
        <SmallButton
          buttonText="DELETE"
          onPress={() =>{  this.setState({showToast:true})
            setTimeout(()=>{
            this.setState({showToast:false})},2000)}}
        />
      </View>
    </View>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBars
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.WHITE_SMOKE}
        />
         {/* <KeyboardAwareScrollView
              // style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={true}
              enableResetScrollToCoords={false}
              keyboardVerticalOffset={0}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always"> */}
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
           
          <FlatList
                
                showsHorizontalScrollIndicator={false}
                data={address_details}
                renderItem={({item}) => this.renderAddress(item)}
                keyExtractor={(item)=>item.id}
              />
           
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
        {/* </KeyboardAwareScrollView> */}
        <View style={{alignSelf:'center'}}>
              {this.state.showToast ? (
                <ToastMessage text='In Progress' />
              ) : null}
            </View>     
      </SafeAreaView>
    );
  }
}

export default ManageAddress;
