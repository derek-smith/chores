const DEFAULT_STATE = {
  isSignedIn: false,
  name: '',
  choreList: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        name: action.payload.name,
      };
    case 'GET_CHORE_LIST_SUCCESS':
      return {
        ...state,
        choreList: action.payload
          .choreList
          .filter((_, index) => index > 0)
          .map(([name, price]) => ({
            name,
            price: parseFloat(price) * 100,
          })),
      };
    default:
      return state;
  }
};

export default reducer;