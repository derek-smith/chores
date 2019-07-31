import sheets from '../api/sheets';

export const incrementChore = choreId => dispatch => {
  dispatch({type: 'INCREMENT_CHORE', payload: {choreId}})
}

export const decrementChore = choreId => dispatch => {
  dispatch({type: 'DECREMENT_CHORE', payload: {choreId}})
}

// Note: `data` in `initSheetsApi()` and `signIn()` must match!!

export const initSheetsApi = () => dispatch => {
  dispatch({type: 'INIT_SHEETS_API_PENDING'});
  return sheets.init().then(data => {
    dispatch({type: 'INIT_SHEETS_API_SUCCESS', payload: data});
    if (data.isSignedIn) {
      dispatch({type: 'SIGN_IN_SUCCESS', payload: data});
    }
  }).catch(() => {
    dispatch({type: 'INIT_SHEETS_API_ERROR'});
  });
};

export const signIn = () => async dispatch => {
  dispatch({type: 'SIGN_IN_PENDING'})
  sheets.signIn().then(data => {
    if (data.isSignedIn) {
      dispatch({type: 'SIGN_IN_SUCCESS', payload: data});
    } else {
      dispatch({type: 'SIGN_IN_ERROR'});
    }
  }).catch(() => {
    dispatch({type: 'SIGN_IN_ERROR'});
  });
};

export const getChoreList = () => async dispatch => {
  dispatch({type: 'GET_CHORE_LIST_PENDING'});
  sheets.getChoreList().then(choreList => {
    console.log('getChoreList()', choreList);
    dispatch({type: 'GET_CHORE_LIST_SUCCESS', payload: {choreList}});
  }).catch(() => {
    dispatch({type: 'GET_CHORE_LIST_ERROR'});
  });
};

export const getCompletedChores = () => async dispatch => {
  dispatch({type: 'GET_COMPLETED_CHORES_PENDING'});
  sheets.getCompletedChores().then(completedChores => {
    console.log('getCompletedChores()', completedChores);
    dispatch({type: 'GET_COMPLETED_CHORES_SUCCESS', payload: {completedChores}});
  }).catch(() => {
    dispatch({type: 'GET_COMPLETED_CHORES_ERROR'});
  });
}

export const saveCompletedChores = rows => async dispatch => {
  dispatch({type: 'SAVE_COMPLETED_CHORES_PENDING'});
  sheets.saveCompletedChores(rows).then(() => {
    console.log('saveCompletedChores() success');
    dispatch({type: 'SAVE_COMPLETED_CHORES_SUCCESS'});
  }).catch(() => {
    dispatch({type: 'SAVE_COMPLETED_CHORES_ERROR'});
  });
}

export const openSaveChoresDialog = () => ({
  type: 'OPEN_SAVE_CHORES_DIALOG',
});

export const closeSaveChoresDialog = isSaveSuccessful => dispatch => {
  dispatch({type: 'CLOSE_SAVE_CHORES_DIALOG'});
  if (isSaveSuccessful) {
    getCompletedChores()(dispatch);
    window.location.hash = "/payouts";
  }
};

export const openChangePersonDialog = () => ({
  type: 'OPEN_CHANGE_PERSON_DIALOG',
});

export const closeChangePersonDialog = () => ({
  type: 'CLOSE_CHANGE_PERSON_DIALOG',
});

export const changePerson = person => ({
  type: 'CHANGE_PERSON',
  payload: {person},
});