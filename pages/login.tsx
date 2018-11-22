import AuthComponent, { ISignupForm } from '../components/Auth';
import rebase from '../lib/firebase';

class LoginPage extends AuthComponent {
  submitToFirebase = async ({ emailAddress: email, password }: ISignupForm) => {
    return await rebase.initializedApp.auth().signInWithEmailAndPassword(email, password);
  }
}

export default LoginPage;
