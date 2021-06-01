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
    marginTop:10,
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
 
});

export default styles;
