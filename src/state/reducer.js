const DEFAULT_STATE = {
  isSignedIn: false,
  name: '',
  choreList: [],
  saveStatus: 'PENDING',
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
          .filter((_, index) => index > 0) // Not ideal
          .reduce((chores, [name, price], index) => ({
            ...chores,
            [index + 1]: {
              id: index + 1,
              name,
              price: parseFloat(price) * 100,
              count: 0,
            }
          }), {})
      };
    case 'INCREMENT_CHORE': {
      return {
        ...state,
        choreList: {
          ...state.choreList,
          [action.payload.choreId]: {
            ...state.choreList[action.payload.choreId],
            count: state.choreList[action.payload.choreId].count + 1
          },
        },
      };
    }
    case 'DECREMENT_CHORE': {
      return {
        ...state,
        choreList: {
          ...state.choreList,
          [action.payload.choreId]: {
            ...state.choreList[action.payload.choreId],
            count: state.choreList[action.payload.choreId].count - 1,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;