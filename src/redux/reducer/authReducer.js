const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
