import axios from 'axios';

export const fetchItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/items');
    dispatch({
      type: 'FETCH_ITEMS',
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addItem = (name) => async (dispatch) => {
  try {
    const res = await axios.post('/api/items', { name });
    dispatch({
      type: 'ADD_ITEM',
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
