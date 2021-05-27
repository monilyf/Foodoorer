import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
  btnPrimary: {
    flexDirection: 'row',
    borderRadius: 14,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.DARK_GRAY,
    paddingVertical: 14,
  },
  btnImage: {
    width: ThemeUtils.relativeWidth(6),
    height: ThemeUtils.relativeHeight(3),
    marginLeft: 20,
  },
  btnName: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    color: Color.BLACK,
    paddingHorizontal: 20,
  },
});

export default styles;
