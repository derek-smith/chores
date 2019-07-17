import creditials from './.credentials.json';

export const init = async () => {
  return new Promise(resolve => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: creditials.web.api_key,
        clientId: creditials.web.client_id,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
      });
      console.log('init() gapi.auth2:', window.gapi.auth2);
      
      const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
      console.log('init() isSignedIn:', isSignedIn);

      if (!isSignedIn) {
        resolve({isSignedIn});
        return;
      }

      const name = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName();
      console.log('init() name:', name);

      // TODO: Return other data like name
      resolve({isSignedIn, name});
    });
  });
};

export const googleSignIn = async () => {
  let isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();

  if (!isSignedIn) {
    await window.gapi.auth2.getAuthInstance().signIn();
    isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  if (!isSignedIn) {
    return {isSignedIn};
  }

  const name = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName();

  // TODO: Return other data like name
  return {isSignedIn, name};
}

export default {
  init,
  googleSignIn,
}