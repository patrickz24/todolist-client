import apiCall from '../apiCall';

export const signUp = (user) => async dispatch =>{
    const res = await apiCall('/signup', 'post', user);
    return dispatch({type: 'SIGNUP_USER', payload:res.data});
};


export const signIn = (user) => async dispatch =>{
    const res = await apiCall('/signin', 'post', user);
    return dispatch({type: 'SIGNIN_USER', payload:res.data});
};