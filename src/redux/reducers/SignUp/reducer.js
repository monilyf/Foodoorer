import {types} from '../../Constants/action-types';

let initialState = { 
    signUpResponse : []
}

const signUpReducer = (state = initialState, action) => {
    // console.log('signup action.payload;;;',action.payload)
    switch (action.type){
        // case types.CREATE_USER:
        //     return {...state,signUpResponse:action.payload}
        
        case types.CREATE_USER_SUCCESS:
            return {...state,signUpResponse:action.payload.data}

        case types.CREATE_USER_FAILURE:
            return {...state,signUpResponse:action.payload}

        default:
            return state;
    }
}

export default signUpReducer;
