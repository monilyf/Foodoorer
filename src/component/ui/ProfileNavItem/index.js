import React from 'react'
import { View, TouchableHighlight, Image } from 'react-native'
import Label from '../../ui/Label'
import Color from '../../../utils/Color'

const ProfileNavItem = (props) => {

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={Color.HIGHLIGHT_COLOR}
      onPress={props.onPress}
      style={{ marginHorizontal: 30, padding: 12 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={props.iconPath}
        />
        <Label color={Color.PRIMARY_DARK} ms={25}>
          {props.label}
        </Label>
      </View>
    </TouchableHighlight>
  )

}
export default ProfileNavItem