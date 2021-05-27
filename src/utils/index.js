import {Platform, NetInfo} from 'react-native';
import Color from '../utils/Color';
import DateUtils from '../utils/DateUtils';
import Messages from '../utils/MessageUtils';
import Constants from '../utils/Constants';
import CommonStyle from '../utils/CommonStyles';
import ThemeUtils from '../utils/ThemeUtils';
import {validation, PasswordValidate} from '../utils/ValidationUtils';

const {Version, OS} = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_IOS = OS === 'ios';
export const IS_LT_LOLLIPOP = Version < 21;

// use for check internet connection
export const isNetworkConnected = () => {
  if (Platform.OS === 'ios') {
    return new Promise(resolve => {
      const handleFirstConnectivityChangeIOS = isConnected => {
        NetInfo.isConnected.removeEventListener(
          'change',
          handleFirstConnectivityChangeIOS,
        );
        resolve(isConnected);
      };
      NetInfo.isConnected.addEventListener(
        'change',
        handleFirstConnectivityChangeIOS,
      );
    });
  }

  return NetInfo.isConnected.fetch();
};
export default {
  isNetworkConnected,
};

export {
  Color,
  DateUtils,
  Messages,
  Constants,
  CommonStyle,
  ThemeUtils,
  validation,
  PasswordValidate,
};
