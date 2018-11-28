import { Button, Typography } from '@material-ui/core';
import { Form, Scope } from 'informed';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Centered from '../components/Centered';
import MaterialText from '../components/MaterialTextField';
import rebase from '../lib/firebase';
import withAuth from '../lib/withAuth';

function New12WeekYearFormContent() {
  return (
    <Centered>
      <Scope scope="goals[0]">
        <MaterialText label="Goal Name" id="goal-name" field="name" type="text" required />
        <MaterialText label="Tactic Name" id="tactic-name" field="tactics[0].name" type="text" required />
        <MaterialText
          label="Start Date"
          id="start-date"
          field="startDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button type="submit">Submit</Button>
      </Scope>
    </Centered>
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
        <Typography align="center" variant="h4">Create New 12-Week Year</Typography>
        <Form component={New12WeekYearFormContent} onSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default connect(
  state => ({
    user: state.userStore.user,
  }),
)(withAuth(DashboardPage));
