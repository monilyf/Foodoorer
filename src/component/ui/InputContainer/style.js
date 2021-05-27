import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: Color.WHITE,
    borderWidth: 0.3,

    borderRadius: 14,
    borderBottomWidth: 1,
    backgroundColor: Color.WHITE,
  },
  input: {
    color: Color.DARK_GRAYISH_BLUE,
    paddingLeft: 60,
    flex: 1,
    fontSize: 20,
  },
  extraIcon: {marginTop: 15, marginRight: 20},
  errorIcon: {marginTop: 15, marginRight: 20, color: Color.ERROR},
  inputIcon: {
    marginTop: 15,
    marginLeft: 20,
    position: 'absolute',
    fontSize: 20,
  },
});

export default styles;
