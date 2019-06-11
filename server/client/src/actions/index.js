import axios from 'axios';
import { FETCH_USER, SUBMIT_SURVEY } from './types';

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user');

    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe', token);

    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const submitSurvey = values => async dispatch => {
  try {
    const res = axios.post('/api/surveys');

    dispatch({
      type: SUBMIT_SURVEY,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
