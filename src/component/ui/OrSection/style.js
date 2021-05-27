import { StyleSheet } from "react-native"
import Color from "../../../utils/Color";
import ThemeUtils from '../../../utils/ThemeUtils'

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: ThemeUtils.relativeHeight(0.1),
        // width:'42%',
        width: ThemeUtils.relativeWidth(36),
        backgroundColor: Color.DARK_GRAY,

    },

});
export default styles;