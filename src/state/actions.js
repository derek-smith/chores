import sheets from '../api/sheets';

// Note: `data` in `signIn()` and `initSheetsApi()` must match!!

export const signIn = () => async dispatch => {
  dispatch({type: 'SIGN_IN_PENDING'})
  sheets.googleSignIn().then(data => {
    if (data.isSignedIn) {
      dispatch({type: 'SIGN_IN_SUCCESS', payload: data});
    } else {
      dispatch({type: 'SIGN_IN_ERROR'});
    }
  }).catch(() => {
    dispatch({type: 'SIGN_IN_ERROR'});
  });
};

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