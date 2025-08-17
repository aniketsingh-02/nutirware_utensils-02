import axios from 'axios';

export const register = (formData) => {
  return async (dispatch) => {
      try {
          // Your registration API call or logic here
          // For example:
          // const response = await axios.post('/api/register', formData);
          
          dispatch({
              type: 'REGISTER_SUCCESS',
              payload: formData
          });
      } catch (error) {
          dispatch({
              type: 'REGISTER_FAIL',
              payload: error.response.data.message
          });
      }
  };
};
