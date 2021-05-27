import React from 'react';
import { View } from 'react-native';
import styles from './style'
import Label from '../Label'
import Color from '../../../utils/Color';

const OrSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Label bolder color={Color.BLACK} ph={5} xsmall>OR</Label>
            <View style={styles.line}></View>
        </View>
    )
}

export default OrSection;
