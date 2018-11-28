import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { User } from 'firebase';
import App, { Container } from 'next/app';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import Meta from '../components/Meta';
import Page from '../layouts/main';
import rebase from '../lib/firebase';
import getPageContext from '../lib/getPageContext';
import withReduxStore from '../lib/withReduxStore';
import { setUser } from '../store/actions/user';

class MyApp extends App {
  private pageContext: any;
  constructor(props: any) {
    super(props);
    this.state = { isLoading: true };
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    const { dispatch } = this.props.reduxStore;
    rebase.initializedApp.auth().onAuthStateChanged((user: User) => {
      dispatch(setUser(user));
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
          <Meta />
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Provider store={reduxStore}>
                <Page isLoading={this.state.isLoading}>
                  <Component pageContext={this.pageContext} {...pageProps} />
                </Page>
              </Provider>
            </MuiThemeProvider>
          </JssProvider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
