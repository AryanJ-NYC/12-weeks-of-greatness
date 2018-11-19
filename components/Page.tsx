import { createMuiTheme, CssBaseline } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Meta from './Meta';

const theme = createMuiTheme({
  palette: {
    error: red,
    primary: indigo,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});

const Page: React.SFC<IProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Meta />
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default Page;

interface IProps {
  children: JSX.Element;
}
