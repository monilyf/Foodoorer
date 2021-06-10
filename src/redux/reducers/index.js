import {combineReducers} from 'redux';
import signInReducer from './SignIn/reducer';
import signUpReducer from './SignUp/reducer';
import onBoardingReducer from './OnBoarding/reducer';
import cartReducer from './Cart/reducer';



const rootReducer = combineReducers({
   // signUp:signUpReducer,
    // signIn:signInReducer,
    onBoarding:onBoardingReducer,
    // cart:cartReducer,
    cart:cartReducer

});

export default rootReducer;