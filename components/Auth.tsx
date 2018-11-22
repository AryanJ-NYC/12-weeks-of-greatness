import { Button, Grid } from '@material-ui/core';
import { Form } from 'informed';
import { Component } from 'react';
import Snackbar from '../components/Snackbar';
import MaterialText from '../components/TextField';

export interface ISignupForm {
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

export default abstract class AuthComponent extends Component {
  formApi: any;
  state = { err: null };

  handleSnackbarClose = (_, reason: string) => {
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
          message={this.state.err?.message}
        />
      </>
    );
  }
  abstract async submitToFirebase(formState: ISignupForm): Promise<any>;

  handleSubmit = async (formState: ISignupForm): Promise<void> => {
    try {
      await this.submitToFirebase(formState);
      this.formApi.reset();
    } catch (err) {
      this.setState({ err });
    }
  }

  private setFormApi = (formApi: any) => {
    this.formApi = formApi;
  }
}
