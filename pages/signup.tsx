import AuthComponent, { ISignupForm } from '../components/Auth';
import firebase from '../lib/firebase';

class SignupPage extends AuthComponent {
  submitToFirebase = async ({ emailAddress: email, password }: ISignupForm) => {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}

export default SignupPage;
