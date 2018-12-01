import { AppBar, createStyles, Toolbar, Typography, withStyles, WithStyles } from '@material-ui/core';
import { User } from 'firebase';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { connect } from 'react-redux';
import rebase from '../lib/firebase';

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
  return (
    <>
      <Link href="/dashboard">
        <Typography className={classes.navLink} component="a">Dashboard</Typography>
      </Link>
      <Typography className={classes.navLink} onClick={signout}>Sign out</Typography>
    </>
  );
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
    await rebase.initializedApp.auth().signOut();
  } catch (err) {
    throw new Error(err);
  }
}

interface INavbar extends WithStyles<typeof styles> {
  user: User;
}
function Navbar({ classes, user }: INavbar) {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} >
        {isEmpty(user) ? renderLoggedOut(classes) : renderLoggedIn(classes)}
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  state => ({
    user: state.userStore.user,
  }),
)(withStyles(styles)(Navbar));
