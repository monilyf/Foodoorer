import React from 'react'
import { View, Image } from 'react-native'
import ThemeUtils from '../../../utils/ThemeUtils'
import logo from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <View>
      <Image
        source={logo}
        style={{
          alignSelf: 'center',
          marginBottom: 15,
          height: ThemeUtils.relativeHeight(12),
          width: ThemeUtils.relativeWidth(50),
        }}
      />
    </View>
  )
}

export default Logo
