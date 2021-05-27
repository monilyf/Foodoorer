import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashScreen_RootView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  logo: {
    height: 200,
    width: '80%',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',

    bottom: 50,
  },

});
export default styles;
