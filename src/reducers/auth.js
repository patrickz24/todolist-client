import { initialState } from "../context/authContext";

const auth = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_SUCCESS':
            console.log(action);
            return {...state, user:action.payload.user, isAuthenticated:true};
            case 'SIGNUP_USER_FAILURE':
                console.log(action.payload);
                return {...state, signUpErr: action.payload};  
case 'SET_CURRENT_USER_SUCESS':
    return { ...state, user:action.payload };




                // Sign In
            case 'SIGNIN_USER_SUCCESS':
                console.log(action);
                return {...state, user:action.payload.user, isAuthenticated:true};
                case 'SIGNIN_USER_FAILURE':
                    console.log(action);
                console.log(action.payload);
                return {...state, signInErr: action.payload};  
                  
                default:
                    return state;
    }
}

export default auth;