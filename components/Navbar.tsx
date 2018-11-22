import { AppBar, createStyles, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { connect } from 'react-redux';
import firebase from '../lib/firebase';

const styles = createStyles({
  navLink: {
    '&:not(:last-child)': {
      paddingRight: '1rem',
    },
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function renderLoggedIn(classes) {
  return <Typography className={classes.navLink} onClick={signout}>Sign out</Typography>;
}

function renderLoggedOut(classes) {
  return (
    <>
      <Link href="/login">
        <Typography className={classes.navLink} component="a">Login</Typography>
      </Link>
      <Link href="/signup">
        <Typography className={classes.navLink} component="a">Signup</Typography>
      </Link>
    </>
  );
}

async function signout() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    throw new Error(err);
  }
}

function Navbar({ classes, user }: IProps) {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} >
        {isEmpty(user) ? renderLoggedOut(classes) : renderLoggedIn(classes)}
      </Toolbar>
    </AppBar>
  );
}

interface IProps {
  classes: Partial<ClassNameMap<keyof typeof styles>>;
}

export default connect(
  state => ({
    user: state.userStore.user,
  }),
)(withStyles(styles)(Navbar));
