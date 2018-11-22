import AuthComponent, { ISignupForm } from '../components/Auth';
import rebase from '../lib/firebase';

class SignupPage extends AuthComponent {
  submitToFirebase = async ({ emailAddress: email, password }: ISignupForm) => {
    return await rebase.initializedApp.auth().createUserWithEmailAndPassword(email, password);
  }
}

export default SignupPage;
