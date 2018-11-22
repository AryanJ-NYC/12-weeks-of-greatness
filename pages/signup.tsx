import { Button, Grid } from '@material-ui/core';
import AuthComponent from '../components/Auth';
import MaterialText from '../components/TextField';
import firebase from '../lib/firebase';

interface ISignupForm {
  emailAddress: string;
  password: string;
}

function FormContent() {
  return (
    <Grid justify="center" container>
      <Grid xs={11} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'column' }} item>
        <MaterialText label="Email Address" id="email-address" field="emailAddress" type="email" />
        <MaterialText label="Password" id="password" field="password" type="password" />
        <Button type="submit">Submit</Button>
      </Grid>
    </Grid>
  );
}

class SignupPage extends AuthComponent {
  private async handleSubmit(formState: ISignupForm) {
    const { emailAddress: email, password } = formState;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.formApi.reset();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default SignupPage;