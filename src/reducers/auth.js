import { initialState } from "../context/authContext";

const auth = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_SUCCESS':     
            return {...state, user:action.payload.user, isAuthenticated:true};
        case 'SIGNUP_USER_FAILURE':              
                return {...state, signUpErr: action.payload}; 

        case 'SET_CURRENT_USER_SUCCESS':   
                return { ...state, user:action.payload};

            
        case 'SIGNIN_USER_SUCCESS':                
                return {...state, user:action.payload.user, isAuthenticated:true};
        case 'SIGNIN_USER_FAILURE':          
                return {...state, signInErr: action.payload};  
                  
     default:
             return state;
    }
}

export default auth;