import { createMuiTheme, CssBaseline } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Meta from './Meta';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
  },
  typography: {
    useNextVariants: true,
  }
});

export default function Page({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Meta />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
