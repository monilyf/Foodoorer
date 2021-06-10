import React,{useState, Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
// import  ThemeUtils  from '../../utils/ThemeUtils';
// import { View } from 'react-native';
// import {Label} from '../../component'
// import Icon from 'react-native-vector-icons/FontAwesome';
 const DropDown=( props)=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [details, showDetails] = useState(false);
  const [items, setItems] = useState([
    {label: 'Haicut', value: 'Haicut'},
    {label: 'Waxing', value: 'Waxing'},
    {label: 'Haic c', value: 'Haic c'},
    {label: 'Waxbdf', value: 'Waxbdf'},
  ]);
  console.log('dropDown!!!!!!!!!!!!!--',value)
  return (
      <DropDownPicker
      open={open}
      value={value}
      defaultValue='hii'
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      min={0}
      max={5}
      // closeAfterSelecting={true}
      onClose={props.onClose}
       onChangeItem={item => setValue(...value,[item.value])}
     // onChangeSearchText={Alert.alert('sandhy')}
      // modalContentContainerStyle={{marginHorizontal:ThemeUtils.relativeWidth(2),marginLeft:100}}
      // style={{marginHorizontal:ThemeUtils.relativeWidth(20),alignSelf:'center',padding: 0}}
    />
  
  );
}
export default DropDown;