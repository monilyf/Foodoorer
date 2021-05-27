import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingBottom: 8,
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18,
  },
  profileHeader: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'column',
  },
  subContainerData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editAccount: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Color.BOX_BG,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
  },
});

export default styles;
