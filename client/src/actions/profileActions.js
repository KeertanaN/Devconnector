import { GET_PROFILE, GET_ERRORS } from "./types";
import { GET_PROFILES } from "./types";
import { PROFILE_LOADING } from "./types";
import { PROFILE_NOT_FOUND } from "./types";
import { CLEAR_CURRENT_PROFILE } from "./types";
import axios from 'axios';


//Get Current Profile

export const currentProfile = () => 
dispatch => {
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
      )   
}

//Get profile by handle

export const getProfileByHandle = (handle) =>
dispatch => {
  axios
    .get(`api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      }))
      .catch(err => 
        dispatch({
          type: GET_PROFILE,
          payload: null
        }))
}

//Create Profile

export const createProfile = (profileData,history) => 
dispatch => {
  axios
    .post('api/profile/', profileData)
  .then(res => history.push('/dashboard'))
  .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

//Add experience

export const addExperience = (expData,history) =>
dispatch => {
  axios
    .post('/api/profile/experience', expData)
  .then(res => history.push('/dashboard'))
  .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

//Add Education

export const addEducation = (eduData,history) =>
dispatch => {
  axios
  .post('/api/profile/education',eduData)
  .then(res => history.push('/dashboard'))
  .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

//Delete experience

export const deleteExperience = (expId) =>
dispatch => {
  axios
    .delete(`/api/profile/experience/${expId}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
    }
