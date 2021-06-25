import {StyleSheet,Dimensions} from 'react-native';
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
    alignItems:'center'
  },
  subContainer: {
    flexDirection: 'column',
  },
  subContainerData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // ImgViewSty: {
  //   width: '100%',
  //   backgroundColor: Color.PRIMARY,
  //   height: Dimensions.get('window').height / 4,
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
  ImgViewStyle: {
    position: 'relative',
    width: 70,
    height:  70,
    borderRadius:  50,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileImgSty: {
    width: 70,
    height:  70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.PRIMARY,
  },
  CAbViewSty: {
    position: 'absolute',
    right: -5,
    bottom: 10,
    backgroundColor:Color.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    width:  25,
    height: 25,
    borderRadius:  15,
    overflow: 'hidden',
  },
});

export default styles;
