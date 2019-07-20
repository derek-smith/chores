const DEFAULT_STATE = {
  isSignedIn: false,
  name: '',
  choreList: [],
  total: 0,
};

const calculateTotal = choreList => Object.values(choreList).reduce((total, chore) => total + (chore.count * chore.price), 0);

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
      const s = {
        ...state,
        choreList: {
          ...state.choreList,
          [action.payload.choreId]: {
            ...state.choreList[action.payload.choreId],
            count: state.choreList[action.payload.choreId].count + 1
          },
        },
      };
      return {
        ...s,
        total: calculateTotal(s.choreList),
      };
    }
    case 'DECREMENT_CHORE': {
      const s = {
        ...state,
        choreList: {
          ...state.choreList,
          [action.payload.choreId]: {
            ...state.choreList[action.payload.choreId],
            count: state.choreList[action.payload.choreId].count - 1,
          },
        },
      };
      return {
        ...s,
        total: calculateTotal(s.choreList),
      };
    }
    default:
      return state;
  }
};

export default reducer;