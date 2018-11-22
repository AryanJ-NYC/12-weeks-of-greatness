import AuthComponent, { ISignupForm } from '../components/Auth';
import firebase from '../lib/firebase';

class LoginPage extends AuthComponent {
  handleSubmit = async (formState: ISignupForm) => {
    const { emailAddress: email, password } = formState;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.formApi.reset();
    } catch (err) {
      this.setState({ err });
    }
  }
}

export default LoginPage;
