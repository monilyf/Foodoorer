import {StyleSheet} from 'react-native';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
  btnPrimary: {
    width: ThemeUtils.relativeWidth(84),
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
});

export default styles;
