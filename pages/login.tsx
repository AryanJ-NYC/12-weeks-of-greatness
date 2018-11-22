import AuthComponent, { ISignupForm } from '../components/Auth';
import firebase from '../lib/firebase';

class LoginPage extends AuthComponent {
  submitToFirebase = async ({ emailAddress: email, password }: ISignupForm) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export default LoginPage;
