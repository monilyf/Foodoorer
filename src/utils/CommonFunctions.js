import Snackbar from 'react-native-snackbar';
import Color from './Color';
import { CommonActions } from '@react-navigation/routers';

export const notifyMsg = ({ message, success = true }) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        textColor: Color.WHITE,
        backgroundColor: success ? Color.GREEN : Color.ERROR,
    });
};

export const goto = (navigation, rout, param = {}) => {
    navigation.navigate(rout, {
        param: param,
    });
};

export const resetNavigation = (navigation, rout) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: rout }],
        }),
    );
};