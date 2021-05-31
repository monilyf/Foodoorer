import {StyleSheet} from 'react-native';
import Color from '../../utils/Color'

const styles = StyleSheet.create({
  container: {
    backgroundColor:Color.WHITE_SMOKE,
  },
  listStyle:{
    width: '100%',
    flexDirection: 'row', 
    marginLeft: 20
  },
  divider:{
    width: '100%',
    borderWidth: 0.2,
    borderColor: Color.DARK_GRAY,
    marginTop: 15,
  }
});

export default styles;
