import { SET_CURRENT_USER} from './types';
import { GET_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

//Register user
export const registerUser = (userData,history) => 
dispatch => {
    axios
      .post('/api/users/register', userData)
      .then(res => history.push('/login'))
      .catch(err => 
        dispatch({
          type:GET_ERRORS,
          payload: err.response.data
        })
        );
}

//Login user
export const loginUser = userData => 
dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      //save the token for local storage
      const {token} = res.data;
      localStorage.setItem('jwtToken',token)
      //set token to auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //store user data in redux
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      }));
}

export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = () => 
dispatch => {
//Remove token from localstorage
localStorage.removeItem('jwtToken');
//Remove token from auth header
setAuthToken(false);
//clean the user from Redux store
dispatch(setCurrentUser({}));
}

// this.setState({
//   errors: err.response.data
// })
