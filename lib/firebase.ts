import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAZd4k0SYxRvYGpCTUSSlFKT5HYFDjYTnc',
  authDomain: 'weeks-of-greatness.firebaseapp.com',
  databaseURL: 'https://weeks-of-greatness.firebaseio.com',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
