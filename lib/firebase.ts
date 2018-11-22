import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import rebase from 're-base';

const config = {
  apiKey: 'AIzaSyAZd4k0SYxRvYGpCTUSSlFKT5HYFDjYTnc',
  authDomain: 'weeks-of-greatness.firebaseapp.com',
  databaseURL: 'https://weeks-of-greatness.firebaseio.com',
  projectId: 'weeks-of-greatness',
};

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const db = firebase.firestore(app);
const base = rebase.createClass(db);

export default base;
