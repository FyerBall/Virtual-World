import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCEgIQuWg0fM9HYVZXwnC-6yC43fhqXoiU',
  authDomain: 'virtual-world-3f2c7.firebaseapp.com',
  projectId: 'virtual-world-3f2c7',
  storageBucket: 'virtual-world-3f2c7.appspot.com',
  messagingSenderId: '886130715398',
  appId: '1:886130715398:web:395bc5f643a5dca2894c87',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
