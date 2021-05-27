import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: Color.GRADIENT1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  subContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
