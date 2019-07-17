const DEFAULT_STATE = {
  isSignedIn: false,
  name: '',
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default reducer;