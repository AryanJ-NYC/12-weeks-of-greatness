import { AppBar, createStyles, Toolbar, Typography, withStyles, WithStyles } from '@material-ui/core';
import { User } from 'firebase';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import withAuth from '../lib/withAuth';

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

function renderLoggedIn(classes, signout) {
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

interface INavbar extends WithStyles<typeof styles> {
  signout: () => {};
  user: User;
}
function Navbar({ classes, signout, user }: INavbar) {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} >
        {isEmpty(user) ? renderLoggedOut(classes) : renderLoggedIn(classes, signout)}
      </Toolbar>
    </AppBar>
  );
}

export default withAuth(withStyles(styles)(Navbar));
