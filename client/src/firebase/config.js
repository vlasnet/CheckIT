import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0f5vcdGQ0OiZxN2QmFUWlYtE2DkDqCPk",
  authDomain: "checkit-learn.firebaseapp.com",
  databaseURL: "https://checkit-learn.firebaseio.com",
  projectId: "checkit-learn",
  storageBucket: "checkit-learn.appspot.com",
  messagingSenderId: "493955590237",
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth();
export const db = firebase.database().ref();
export const usersDbRef = db.child('users');
