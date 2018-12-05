import { Typography } from '@material-ui/core';
import { User } from 'firebase';
import { FormState, FormValue } from 'informed';
import { isEmpty, sortBy } from 'lodash';
import * as moment from 'moment';
import React, { Component } from 'react';
import { compose } from 'redux';
import Centered from '../components/Centered';
import CreateNew12WeeksForm from '../components/CreateNew12WeeksForm';
import rebase from '../lib/firebase';
import withAuth from '../lib/withAuth';
import withTwelveWeeks from '../lib/withTwelveWeeks';
import { IGoal, ITwelveWeeks } from '../store/reducers/twelveWeeks';

interface IDashboardProps {
  twelveWeeks: ITwelveWeeks[];
  user: User;
}
class DashboardPage extends Component<IDashboardProps> {
  handleSubmit = async (formState: FormState<FormValue>) => {
    const { uid } = this.props.user;
    await rebase.addToCollection(`users/${uid}/12weeks`, formState);
  }

  renderBody() {
    const { twelveWeeks } = this.props;
    const sortedTwelveWeeks = twelveWeeks ? sortBy(twelveWeeks, ['startDate']) : [];
    const currentTwelveWeeks = sortedTwelveWeeks.length ? sortedTwelveWeeks[0] : null;
    const twelveWeeksEndDate = moment(currentTwelveWeeks?.startDate).add(12, 'weeks');
    if (isEmpty(sortedTwelveWeeks) || twelveWeeksEndDate.isBefore(moment())) {
      return (
        <>
          <Typography align="center" variant="h4">Create New 12-Week Year</Typography>
          <CreateNew12WeeksForm handleSubmit={this.handleSubmit} />
        </>
      );
    } else if (currentTwelveWeeks) {
      return (
        <Centered>
          <div>Start Date: {currentTwelveWeeks.startDate}</div>
          <div>End Date: {twelveWeeksEndDate.format('YYYY-MM-DD')} </div>
          <h1>Goals:</h1>
          {this.renderGoals(currentTwelveWeeks.goals)}
        </Centered>
      );
    }
  }

  renderGoals(goals: IGoal[]) {
    return goals.map(goal => {
      const { tactics } = goal;
      return (
        <>
          <h2 key={goal.name}>{goal.name}</h2>
          <h3>Tactics</h3>
          {tactics.map(tactic => <p key={`tactic${name}`}>{tactic.name}</p>)}
        </>
      );
    });
  }

  render() {
    return this.renderBody();
  }
}

export default compose(withTwelveWeeks, withAuth)(DashboardPage);
