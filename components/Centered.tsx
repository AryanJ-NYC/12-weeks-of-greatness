import { createStyles, Grid, withStyles } from '@material-ui/core';

const styles = createStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
});
function Centered({ children, classes }) {
  return (
    <Grid justify="center" container>
      <Grid xs={11} sm={6} lg={4} className={classes.column} item>
        {children}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Centered);
