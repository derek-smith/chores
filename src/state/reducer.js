const DEFAULT_STATE = {
  choreList: [],
  isSaveDialogOpen: false,
  isSignedIn: false,
  name: '',
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
    case 'SAVE_COMPLETED_CHORES_PENDING':
      return {...state, isSaveDialogOpen: true, saveStatus: 'PENDING'};
    case 'SAVE_COMPLETED_CHORES_SUCCESS':
      return {...state, saveStatus: 'SUCCESS'};
    case 'SAVE_COMPLETED_CHORES_ERROR':
      return {...state, saveStatus: 'ERROR'};
    case 'CLOSE_SAVE_DIALOG':
      return {
        ...state,
        isSaveDialogOpen: false,
        // Reset the counts
        choreList: {
          ...Object.keys(state.choreList).map(choreId => ({
            ...state.choreList[choreId],
            count: 0,
          })),
        },
      };
    default:
      return state;
  }
};

export default reducer;