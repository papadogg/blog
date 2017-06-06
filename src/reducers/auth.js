import * as ACTION from '../const/actions';

const initialState = {
    authenticated: false,
    loginError: false,
    user: ""
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_SUCCESS:
          return loginSuccess(state, action);
        case ACTION.LOGIN_FAIL:
          return loginFail(state, action);
        case ACTION.LOGOUT:
          return logout(state, action);
        case ACTION.LOGIN_ERROR_CLEAR:
          return loginErrorClear(state, action);
        default:
          return state;
    }
}

function loginSuccess (state, action) {
    const _state = {
        authenticated: true,
        loginError: false,
        user: action.payload
    };
    return _state;
}

function loginFail (state, action) {
    const _state = {
        ...state,
        loginError: true
    };
    return _state;
}

function logout (state, action) {
    const _state = {
        authenticated: false,
        loginError: false,
        user: ""
    };
    return _state;
}

function loginErrorClear (state, action) {
    const _state = {
       ...state,
        loginError: false
    };
    return _state;
}
