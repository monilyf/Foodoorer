import React from 'react'
import { View, Modal } from 'react-native'
import CommonStyle from '../../../utils/CommonStyle'
import Color from '../../../utils/Color'
import Label from '../Label'
import StatusBars from '../StatusBar'


const ModalView = (props) => {
    return (
       <View>
         <StatusBars
          hidden={true}
        />
          <Modal
        // backdropOpacity={0.3}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}
      >
        <View style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center',alignItems:'center'}}>
       {props.children}
       </View>
      </Modal>
       </View>
    )
}

export default ModalView
