import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './NavCopy';

export default function Layout(props) {
  const light = createMuiTheme({
    palette: {
      primary: {
        main: '#efd1af',
      },
      secondary: {
        main: '#f0d1e8',
      },
      background: {
        default: '#fff0f8',
        paper: '#ffe0ef',
        partBg: '#ffccee',
      },
    },
  });

  const dark = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#93785a',
      },
      background: {
        default: '#200820',
        paper: '#481040',
        partBg: '#301030',
      },
    },
  });

  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Nav>{props.children}</Nav>
    </ThemeProvider>
  );
}
