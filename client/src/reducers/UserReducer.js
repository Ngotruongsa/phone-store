
export const UserSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {...state, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
            return {...state, error: action.payload };
      default:
        return state;
    }
};

export const UserSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_SUCCESS':
            return {...state, userInfo: action.payload };
        default:
            return state;
    }
};

export const UserSignoutReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNOUT_SUCCESS':
            return {...state};
        default:
            return state;
    }
};

export const getAllUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_USER':{
            return {...state, user: action.payload}
        }

        case 'DELETE_USER':{
            return {...state}
        }

        default: return state
    }
};

export const userPasswordChangeReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_PASSWORD_CHANGE_REQUEST':
        return { loading: true };
      case 'USER_PASSWORD_CHANGE_SUCCESS':
        return { loading: false, success: true };
      case 'USER_PASSWORD_CHANGE_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const UserUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_UPDATE_SUCCESS':
            return { ...state, userInfo: action.payload };
        case 'USER_UPDATE_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

// export const deleteUserReducer = (state = {}, action) => {
//     switch (action.type) {
        
            
//         default: return state
//     }
// }