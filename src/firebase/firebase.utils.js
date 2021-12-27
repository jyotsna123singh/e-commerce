import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyD6a6LoRgVMDkYDC41hkwvYTYxqyBeQWLI",
  authDomain: "crwn-db-8fa91.firebaseapp.com",
  projectId: "crwn-db-8fa91",
  storageBucket: "crwn-db-8fa91.appspot.com",
  messagingSenderId: "526465471783",
  appId: "1:526465471783:web:75214289e55d9ab9b68502",
  measurementId: "${config.measurementId}"
};


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const Firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

