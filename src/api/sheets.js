import creditials from './.credentials.json';

export const init = async () => {
  return new Promise(resolve => {
    // Load Google auth library
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: creditials.api_key,
        clientId: creditials.client_id,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
      });
      
      const auth = window.gapi.auth2.getAuthInstance();

      if (!auth) {
        // Assume we're not signed in
        resolve({isSignedIn: false});
        return;
      }

      const isSignedIn = auth.isSignedIn.get();

      if (!isSignedIn) {
        // We're not signed in
        resolve({isSignedIn});
        return;
      }

      const name = auth.currentUser.get().getBasicProfile().getGivenName();

      // We're signed in
      resolve({isSignedIn, name});
    });
  });
};

export const signIn = async () => {
  const auth = window.gapi.auth2.getAuthInstance();

  if (!auth) {
    // Assume we're not signed in
    return {isSignedIn: false};
  }

  let isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();

  if (!isSignedIn) {
    // Time to sign in. This will pop up a window
    await window.gapi.auth2.getAuthInstance().signIn();
    // Are we signed in now?
    isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  if (!isSignedIn) {
    // We're not signed in
    return {isSignedIn};
  }

  const name = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName();

  // We're signed in
  return {isSignedIn, name};
};

export const getChoreList = async () => {
  const response = await window.gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA',
    range: 'Chore List!A:B',
  });
  return response.result.values;
};

export const getCompletedChores = async () => {
  let response = await window.gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA',
    range: 'Completed Chores!A:D',
  });
  return response.result.values;
}

export const saveCompletedChores = async rows => {
  let response = await window.gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA',
    range: 'Completed Chores!A:A',
  });
  const nextRow = response.result.values.length + 1;

  response = await window.gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: '1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA',
    range: `Completed Chores!A${nextRow}`,
    valueInputOption: 'USER_ENTERED',
    values: rows,
  });

  return response.result.values;
};


export default {
  getChoreList,
  getCompletedChores,
  init,
  saveCompletedChores,
  signIn,
}