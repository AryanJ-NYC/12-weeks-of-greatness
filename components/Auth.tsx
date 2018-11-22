import { Button, Grid } from '@material-ui/core';
import { Form } from 'informed';
import { Component } from 'react';
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
  render() {
    return <Form component={FormContent} getApi={this.setFormApi} onSubmit={this.handleSubmit} />;
  }
  abstract async handleSubmit(formState: ISignupForm): Promise<void>;

  private setFormApi(formApi) {
    this.formApi = formApi;
  }
}
