import creditials from './.credentials.json';

export const init = async () => {
  return new Promise(resolve => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: creditials.api_key,
        clientId: creditials.client_id,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
      });
      
      const auth = window.gapi.auth2.getAuthInstance();

      if (!auth) {
        resolve({isSignedIn: false});
        return;
      }

      const isSignedIn = auth.isSignedIn.get();

      if (!isSignedIn) {
        resolve({isSignedIn});
        return;
      }

      const name = auth.currentUser.get().getBasicProfile().getGivenName();

      resolve({isSignedIn, name});
    });
  });
};

export const googleSignIn = async () => {
  const auth = window.gapi.auth2.getAuthInstance();

  if (!auth) {
    return {isSignedIn: false};
  }

  let isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();

  if (!isSignedIn) {
    await window.gapi.auth2.getAuthInstance().signIn();
    isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  if (!isSignedIn) {
    return {isSignedIn};
  }

  const name = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName();

  return {isSignedIn, name};
}

export default {
  init,
  googleSignIn,
}