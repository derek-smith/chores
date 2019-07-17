import creditials from './.credentials.json';

export const setup = async () => {
  return new Promise(resolve => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: creditials.web.api_key,
        clientId: creditials.web.client_id,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
      });
      console.log('gapi.auth2:', window.gapi.auth2);
      resolve();    
    });
  });
};

export const signIn = () => {
  if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
    window.gapi.auth2.getAuthInstance().signIn();
  }
}