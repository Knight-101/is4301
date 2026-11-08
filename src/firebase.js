import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const config={apiKey:process.env.REACT_APP_FIREBASE_API_KEY,authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:process.env.REACT_APP_FIREBASE_APP_ID};
export const auth=getAuth(initializeApp(config));
export const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export function authMessage(error){
  const messages={
    'auth/wrong-password':'The password is incorrect. Please try again.',
    'auth/user-not-found':'No account exists for this email. Choose Create account to register.',
    'auth/invalid-credential':'The email or password is incorrect. If you have not registered, choose Create account.',
    'auth/invalid-login-credentials':'The email or password is incorrect. If you have not registered, choose Create account.',
    'auth/email-already-in-use':'This email is already registered. Switch to Log in.',
    'auth/invalid-email':'Please enter a valid email address.',
    'auth/weak-password':'Choose a password with at least 6 characters.',
    'auth/popup-closed-by-user':'Google sign-in was cancelled. Please try again.',
    'auth/popup-blocked':'Your browser blocked the Google sign-in window. Allow popups and try again.',
    'auth/too-many-requests':'Too many attempts. Please wait before trying again.',
    'auth/network-request-failed':'The authentication service could not be reached. Check your connection.',
    'auth/unauthorized-domain':'This address is not authorised in Firebase. Use an authorised localhost address.',
  };return messages[error.code]||'Unable to sign in. Please try again.';
}
