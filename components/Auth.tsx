import { Button } from '@material-ui/core';
import { Form } from 'informed';
import Router from 'next/router';
import { Component } from 'react';
import Centered from '../components/Centered';
import Snackbar from '../components/Snackbar';
import MaterialText from './MaterialTextField';

export interface ISignupForm {
  emailAddress: string;
  password: string;
}

function FormContent() {
  return (
    <Centered>
      <MaterialText label="Email Address" id="email-address" field="emailAddress" type="email" />
      <MaterialText label="Password" id="password" field="password" type="password" />
      <Button type="submit">Submit</Button>
    </Centered>
  );
}

export default abstract class AuthComponent extends Component {
  formApi: any;
  state = { err: null };

  handleSnackbarClose = (_: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ err: null });
  }

  render() {
    return (
      <>
        <Form component={FormContent} getApi={this.setFormApi} onSubmit={this.handleSubmit} />
        <Snackbar
          handleClose={this.handleSnackbarClose}
          isOpen={!!this.state.err}
          message={this.state.err?.message }
        />
      </>
    );
  }
  abstract async submitToFirebase(formState: ISignupForm): Promise<any>;

  handleSubmit = async (formState: ISignupForm): Promise<void> => {
    try {
      await this.submitToFirebase(formState);
      Router.push('/dashboard');
      this.formApi.reset();
    } catch (err) {
      this.setState({ err });
    }
  }

  private setFormApi = (formApi: any) => {
    this.formApi = formApi;
  }
}
