import { Typography } from '@material-ui/core';
import { User } from 'firebase';
import { FormState, FormValue } from 'informed';
import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateNew12WeeksForm from '../components/CreateNew12WeeksForm';
import rebase from '../lib/firebase';
import withAuth from '../lib/withAuth';
import { getTwelveWeeks } from '../store/actions/twelveWeeks';
import { ITwelveWeeks } from '../store/reducers/twelveWeeks';

interface IDashboardProps {
  twelveWeeks: ITwelveWeeks[];
  getTwelveWeeks: () => {};
  user: User;
}
class DashboardPage extends Component<IDashboardProps> {
  componentDidMount = () => {
    this.props.getTwelveWeeks();
  }

  handleSubmit = async (formState: FormState<FormValue>) => {
    const { uid } = this.props.user;
    await rebase.addToCollection(`users/${uid}/12weeks`, formState);
  }

  renderBody() {
    if (isEmpty(this.props.twelveWeeks)) {
      return <CreateNew12WeeksForm handleSubmit={this.handleSubmit} />;
    } else {

    }
  }

  render() {
    return (
      <>
        <Typography align="center" variant="h4">Create New 12-Week Year</Typography>
        {this.renderBody()}
      </>
    );
  }
}

export default connect(
  state => ({
    twelveWeeks: state.twelveWeeksStore.twelveWeeks,
    user: state.userStore.user,
  }),
  { getTwelveWeeks }
)(withAuth(DashboardPage));
