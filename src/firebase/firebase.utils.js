import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKc7QpJfOodMSiIcVgy0yQ8kw7AAuH-Sk",
    authDomain: "store-dbase.firebaseapp.com",
    databaseURL: "https://store-dbase.firebaseio.com",
    projectId: "store-dbase",
    storageBucket: "store-dbase.appspot.com",
    messagingSenderId: "943112570905",
    appId: "1:943112570905:web:877e94f85ad1c810adc288",
    measurementId: "G-T09CXEEPQG"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;





