import {StyleSheet} from 'react-native';
import Color from './Color';
import ThemeUtils from './ThemeUtils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabScreen: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },

  boxContainer: {
    marginTop: 20,
    width: ThemeUtils.relativeWidth(95),
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Color.BOX_BG,
    borderRadius: 12,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: Color.ERROR,
    fontStyle: 'italic',
    marginLeft: 23,
  },

  endLine: {
    borderWidth: 1,
    borderColor: Color.DARK_GRAY,
    marginVertical: 3,
    opacity: 0.5,
    marginHorizontal: 30,
  },
});

export default styles;
