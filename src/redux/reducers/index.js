import {combineReducers} from 'redux';
import signInReducer from './SignIn/reducer';
import signUpReducer from './SignUp/reducer';
import onBoardingReducer from './OnBoarding/reducer';
import cartReducer from './Cart/reducer';
import addressReducer from './Address/reducer';
import commonReducer from './Common/reducer';



const rootReducer = combineReducers({
    common: commonReducer,
    signUp:signUpReducer,
    signIn:signInReducer,
    onBoarding:onBoardingReducer,
    // cart:cartReducer,
    cart:cartReducer,
    address:addressReducer,

});

export default rootReducer;