import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.BOX_BG,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 6,
        marginHorizontal: 5,
      },
      imageContainer:{
        borderRadius: 6,
        height: ThemeUtils.relativeHeight(12),
        width: ThemeUtils.relativeWidth(22),
      },
      detailsContaier:{
          
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginHorizontal: 16,
      },
      divider:{
        width: ThemeUtils.relativeWidth(12),
        borderWidth: 1,
        opacity: 0.3,
        borderColor: Color.DARK_GRAY,
        marginVertical: 10,
      }
      
});

export default styles;