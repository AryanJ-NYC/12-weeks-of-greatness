import { IconButton, Snackbar, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

function SnackbarWrapper({ classes, handleClose, isOpen, message }) {
  const iconButton = (
    <IconButton
      key="close"
      aria-label="Close"
      color="inherit"
      className={classes.close}
      onClick={handleClose}
    >
      <CloseIcon />
    </IconButton>
  );
  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      message={<span id="message-id">{message}</span>}
      action={[iconButton]}
    />
  );
}

export default withStyles(styles)(SnackbarWrapper);
