import { Button, Typography } from '@material-ui/core';
import { Form, Scope } from 'informed';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialText from '../components/TextField';
import rebase from '../lib/firebase';

function New12WeekYearFormContent() {
  return (
    <>
      <Scope scope="goals[0]">
        <MaterialText label="Goal Name" id="goal-name" field="name" type="text" />
        <MaterialText label="Tactic Name" id="tactic-name" field="tactics[0].name" type="text" />
        <Button type="submit">Submit</Button>
      </Scope>
    </>
  );
}

class DashboardPage extends Component {
  handleSubmit = async formState => {
    const { uid } = this.props.user;
    await rebase.addToCollection(`users/${uid}/goals`, { ...formState });
  }

  render() {
    return (
      <>
        <Typography>Create New 12-Week Year</Typography>
        <Form component={New12WeekYearFormContent} onSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default connect(
  state => ({
    user: state.userStore.user,
  }),
)(DashboardPage);
