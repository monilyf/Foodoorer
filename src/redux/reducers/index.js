import {combineReducers} from 'redux';
import signInReducer from './SignIn/reducer';
import signUpReducer from './SignUp/reducer';
import onBoardingReducer from './OnBoarding/reducer';
import cartReducer from './Cart/reducer';
import addressReducer from './Address/reducer';



const rootReducer = combineReducers({
   // signUp:signUpReducer,
    // signIn:signInReducer,
    onBoarding:onBoardingReducer,
    // cart:cartReducer,
    cart:cartReducer,
    address:addressReducer,

});

export default rootReducer;