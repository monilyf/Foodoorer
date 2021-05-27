import React from 'react';
import { View, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './style'


Loader = (props) => {
    return (
        <Spinner visible={props.visible}>
            <View style={[styles.container]}>
                <Image style={styles.img}
                    source={require("../../../assets/images/loader.gif")}
                />
            </View>
        </Spinner>
    )
}


export default Loader;