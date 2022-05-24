import axios from 'axios'
import actiontypes from '../actiontypes'
import jwt_decode from "jwt-decode";


const apiCall = (url, user, dispatch) => {
  axios.post(url, user)
  .then(res => {
    dispatch(authSuccess(res.data.token))
  })
  .catch(err => dispatch(authFailure(err.message)))
}


export const registerUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:9999/api/users/register', user, dispatch)
  }
}

export const loginUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:9999/api/users/login', user, dispatch)
  }
}


export const checkAuth = () => {
  return async dispatch => {
    const token = localStorage.getItem('token')

    if(token) {
      const decode = jwt_decode(token);
      if (decode.exp * 1000 < new Date().getTime()) {
          console.log('Token Expired')
          localStorage.removeItem('token')
      }else {
        const res = await dispatch(getUserInfo(decode.id, token))
        console.log(res.user)
        const userInfo = {
          token,
          email: res.user.email,
          name: res.user.name,
          id: res.user._id,
          
        }
        dispatch(authSuccess(userInfo))
      }
    }
  }
}

const authSuccess = (token) => {
  return {
    type: actiontypes().auth.authorizeSuccess,
    payload: token
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authorizeFailure,
    payload: err
  }
}

const getUserInfo = (id, token) => {
    return async () => {
     const res = await axios.get(`http://localhost:9999/api/users/${id}`, {headers: { Authorization: "Bearer " + token}})
     return res.data
    }
 }