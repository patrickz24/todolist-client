import { initialState } from "../context/authContext";

const auth = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_SUCCESS':
            console.log(action);
            return {...state, user:action.payload.user, isAuthenticated:true};
            case 'SIGNUP_USER_FAILURE':
                console.log(action.payload);
                return {...state, signUpErr: action.payload};    
            case 'SIGNIN_USER':
                return {...state, user:action.payload.user, isAuthenticated:true};
                default:
                    return state;
    }
}

export default auth;