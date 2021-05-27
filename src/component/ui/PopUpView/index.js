import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Color, ThemeUtils } from '../../../utils';
import RoundButton from '../../../component/ui/RoundButton';
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

export default class PopUpView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(20, 23, 31, 0.3)',
        }}>
        <View style={Style.outerViewStyle}>
          <View>
            {this.props.children}
            <View style={Style.bottomButtonView}>
              <View style={{ width: ThemeUtils.relativeWidth(32) }}>
                <RoundButton
                  click={() => {
                    this.props.onClickButton1()
                  }}
                  btn_block
                  text={this.props.button1Text}
                />
              </View>
              <View style={{ width: ThemeUtils.relativeWidth(32) }}>
                <RoundButton
                  backgroundColor={Color.WHITE}
                  borderColor={Color.PRIMARY_DARK}
                  textColor={Color.PRIMARY_DARK}
                  click={() => {
                    this.props.onClickButton2()
                  }}
                  btn_block
                  text={this.props.button2Text}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export const Style = StyleSheet.create({
  outerViewStyle: {
    width: isTablet
      ? ThemeUtils.relativeWidth(75)
      : ThemeUtils.relativeWidth(80),
    marginVertical: ThemeUtils.relativeHeight(30),
    paddingVertical: ThemeUtils.relativeHeight(2),
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 8,
    alignItems: 'center',
  },
  bottomButtonView: {
    flexDirection: 'row',
    marginVertical: ThemeUtils.relativeHeight(2),
    width: ThemeUtils.relativeWidth(70),
    justifyContent: 'space-evenly',
  },
});
