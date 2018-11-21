import { Button } from '@material-ui/core';
import { Form } from 'informed';
import { Component } from 'react';
import MaterialText from '../components/TextField';
import firebase from '../lib/firebase';

interface ISignupForm {
  emailAddress: string;
  password: string;
}

function FormContent() {
  return (
    <div>
      <label htmlFor="email-address">Email Address</label>
      <MaterialText id="email-address" field="emailAddress" type="email" />
      <label htmlFor="password">Password</label>
      <MaterialText id="password" field="password" type="password" />
      <Button type="submit">Submit</Button>
    </div>
  );
}

class SignupPage extends Component {
  render() {
    return <Form component={FormContent} getApi={this.setFormApi} onSubmit={this.handleSubmit} />;
  }

  private setFormApi(formApi) {
    this.formApi = formApi;
  }

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
