import * as ACTION from '../const/actions';

export function login (userInfo) {
    return (dispatch, getState) => {
        const users = getState().users;
        const user = users.find(user => user.name === userInfo.name);
        let correctPass;
        if(user) {
            correctPass = user.password === userInfo.password;
        }
        if(!user || !correctPass) {
            dispatch({
                type: ACTION.LOGIN_FAIL
            });
        } else {
            dispatch({
                type: ACTION.LOGIN_SUCCESS,
                payload: user.name
            });
        }
    };
}

export function logout () {  
    return {
        type: ACTION.LOGOUT
    };
}

export function loginErrorClear(){
    return {
        type: ACTION.LOGIN_ERROR_CLEAR
    };
}