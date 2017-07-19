// @flow
export const appTitle = 'Everyday Training';

export const stravaOAuthUrl = () => {
  const clientID = process.env.REACT_APP_STRAVA_CLIENTID;
  const URI = 'http://localhost:3000/strava';
  const prompt = 'force';
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${String(clientID)}&response_type=code&redirect_uri=${URI}&approval_prompt=${prompt}&scope=view_private`;
  return authUrl;
};

export const stravaFunctionUrl = (code: string, uid: string) => {
  return `https://us-central1-velox-f43d6.cloudfunctions.net/strava?code=${code}&uid=${uid}`;
};

export const allowedFunctionUrl = (phone: string) => {
  return `https://us-central1-velox-f43d6.cloudfunctions.net/allowed?num=${phone}`;
};