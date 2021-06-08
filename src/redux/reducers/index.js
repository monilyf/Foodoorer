import {combineReducers} from 'redux';
import signInReducer from './SignIn/reducer';
import signUpReducer from './SignUp/reducer';
import onBoardingReducer from './OnBoarding/reducer';


const rootReducer = combineReducers({
    // signUp:signUpReducer,
    // signIn:signInReducer,
    onBoarding:onBoardingReducer,

});

export default rootReducer;