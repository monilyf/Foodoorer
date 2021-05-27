import { StyleSheet } from 'react-native';
import Color from '../../../utils/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.WHITE
    },
    imag: {
        flex: 1,
        maxHeight: 100,
        maxWidth: 100
    }
})

export default styles