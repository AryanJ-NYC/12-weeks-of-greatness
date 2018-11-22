import { Button, Grid } from '@material-ui/core';
import { Form } from 'informed';
import { Component } from 'react';
import { connect } from 'react-redux';
import MaterialText from '../components/TextField';
import { signup } from '../store/actions/user';

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

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  render() {
    return <Form component={FormContent} getApi={this.setFormApi} onSubmit={this.handleSubmit} />;
  }

  private setFormApi(formApi) {
    this.formApi = formApi;
  }

  private async handleSubmit(formState: ISignupForm) {
    const { emailAddress: email, password } = formState;
    try {
      await this.props.signup(email, password);
      this.formApi.reset();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  { signup },
)(SignupPage);
