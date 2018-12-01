import { User } from 'firebase';
import { isEmpty } from 'lodash';
import Router from 'next/router';
import { Component, ComponentType } from 'react';
import rebase from '../lib/firebase';

export default function withAuth(AuthComponent: ComponentType<{user: User | {}}>) {
  return class Authenticated extends Component<any, {isLoading: boolean, user: User | {}}> {
    constructor(props: any) {
      super(props);
      this.state = {
        isLoading: true,
        user: {},
      };
    }

    componentDidMount() {
      rebase.initializedApp.auth().onAuthStateChanged((user: User) => {
        if (!user || isEmpty(user)) {
          Router.push('/login');
        } else {
          this.setState({ user, isLoading: false });
        }
      });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? <div>LOADING....</div> : <AuthComponent {...this.props} user={this.state.user} />}
        </div>
      );
    }
  };
}
