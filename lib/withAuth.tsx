import { User } from 'firebase';
import { isEmpty } from 'lodash';
import Router from 'next/router';
import { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import rebase from '../lib/firebase';
import { setIsLoading } from '../store/actions/ui';

export default function withAuth(AuthComponent: ComponentType<{user: User | {}}>) {
  class Authenticated extends Component<any, {user: User | {}}> {
    constructor(props: any) {
      super(props);
      this.state = {
        user: {},
      };
    }

    componentDidMount = () => {
      rebase.initializedApp.auth().onAuthStateChanged((user: User) => {
        if (!user || isEmpty(user)) {
          Router.push('/login');
        } else {
          this.setState({ user });
        }
      });
    }

    signout = () => {
      try {
        rebase.initializedApp.auth().signOut();
        this.setState({ user: {} });
      } catch (err) {
        throw new Error(err);
      }
    }

    render() {
      return <AuthComponent {...this.props} signout={this.signout} user={this.state.user} />;
    }
  }
  return connect(null, { setIsLoading })(Authenticated);
}
