import { AppBar, createStyles, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Link from 'next/link';

const styles = createStyles({
  navLink: {
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function Navbar({ classes }: IProps) {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} >
        <Link href="/signup">
          <Typography className={classes.navLink} component="a">Signup</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

interface IProps {
  classes: Partial<ClassNameMap<keyof typeof styles>>;
}

export default withStyles(styles)(Navbar);
