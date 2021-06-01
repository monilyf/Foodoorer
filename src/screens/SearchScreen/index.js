import React, { Component } from 'react'
import { SafeAreaView,ScrollView, View } from 'react-native'
import {StatusBars,Search,Header,Label} from '../../component'
import CommonStyle from '../../utils/CommonStyle';
import Color from '../../utils/Color';
import styles from './style'

class SearchScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor:Color.WHITE_SMOKE}}>
            <StatusBars
              hidden={false}
              barStyle="dark-content"
              backgroundColor={Color.WHITE_SMOKE}
            />
             <Header
                iconName="chevron-back-outline" justifyContent='space-between'
                onPress={() => this.props.navigation.goBack()}>
                <Search style={CommonStyle.shadowStyle}/>
               
              </Header>
            <View style={styles.container}>
             </View>
             </SafeAreaView>
         
        )
    }
}

export default SearchScreen
