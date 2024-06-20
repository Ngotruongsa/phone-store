import axios from 'axios'

export const login = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/login', user)
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
    }
};


export const SignupUser = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/register', user)
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
      document.location.href = '/';
    } catch (error) {
    }
};

export const createUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_CREATE_REQUEST' });
  try {
    const { data } = await axios.post('http://localhost:4000/user/register', user);
    dispatch({ type: 'USER_CREATE_SUCCESS', payload: data });
    document.location.href = '/admin/customer';
  } catch (error) {
    dispatch({
      type: 'USER_CREATE_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const SignoutUser = (user) => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {} })
  document.location.href = '/';
};

export const getAllUser = () => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await  axios.get('http://localhost:4000/user')
    dispatch({type: 'GET_ALL_USER', payload: data})
  } catch (error) {
    dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
  }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await axios.delete(`http://localhost:4000/user/delete/${userId}`)
    dispatch({type: 'DELETE_USER', payload: data})
  } catch (error) {
    dispatch({type: 'DELETE_USER_FAIL', error: error.message})
  }
}

export const changePassword = (userId, oldPassword, newPassword) => async (dispatch) => {
  dispatch({ type: 'USER_PASSWORD_CHANGE_REQUEST' });
  try {
    const { data } = await axios.patch(`http://localhost:4000/user/password/${userId}`, { oldPassword, newPassword });
    dispatch({ type: 'USER_PASSWORD_CHANGE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_PASSWORD_CHANGE_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateUser = (userId, user) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(`http://localhost:4000/user/update/${userId}`, user, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const getUserDetails = (userId) => async (dispatch, getState) => {
//   dispatch({ type: 'USER_DETAILS_REQUEST' });
//   try {
//     const { data } = await axios.get(`http://localhost:4000/user/${userId}`);
//     dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data });
//   } catch (error) {
//     dispatch({
//       type: 'USER_DETAILS_FAIL',
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

export const updateCustomer = (userId, user) => async (dispatch, getState) => {
  dispatch({ type: 'USER_CREATE_REQUEST' });
  try {
    const { data } = await axios.put(`http://localhost:4000/user/update/${userId}`, user);
    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data });
    document.location.href = '/admin/customer';
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

