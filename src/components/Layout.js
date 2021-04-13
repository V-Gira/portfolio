import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Nav from './Nav';
import NavCopy from './NavCopy';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#efd1af',
    },
    secondary: {
      main: '#f0d1e8',
    },
    background: {
      default: '#fffbf0',
      paper: '#f7f3e8',
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#93785a',
    },
  },
});

export default function Layout(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavCopy>{props.children}</NavCopy>
    </ThemeProvider>
  );
}
