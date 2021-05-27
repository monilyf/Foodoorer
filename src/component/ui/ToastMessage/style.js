import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3e0ea',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  subContainer: {
    flexDirection: 'row',
    height: 30,
  },
  column: {backgroundColor: 'red', width: 5},
  content: {
    marginHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  toastMsg: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
