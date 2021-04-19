import React from 'react';
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import ParticlesBg from 'particles-bg';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

const appBarTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
      },
    },
    MuiTypography: {
      colorInherit: 'white',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    color: '#fff',
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    padding: theme.spacing(3),
  },
}));
export default function NavCopy(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={appBarTheme}>
        <AppBar position='fixed'>
          <ParticlesBg type='circle' bg={true} />
          <Toolbar>
            <Typography
              className={classes.appBar}
              color='inherit'
              className={classes.title}
              variant='h5'
              noWrap
            >
              Mushroom portfolio
            </Typography>
            <Button
              startIcon={<MailIcon />}
              aria-label='Home'
              component={NavLink}
              exact
              to={'/'}
            >
              Home
            </Button>
            <Button
              startIcon={<MailIcon />}
              aria-label='Roots'
              component={NavLink}
              to={'/roots'}
            >
              Roots
            </Button>
            <Button
              startIcon={<MailIcon />}
              aria-label='Growth'
              component={NavLink}
              to={'/growth'}
            >
              Growth
            </Button>
            <Button
              startIcon={<MailIcon />}
              aria-label='Network'
              component={NavLink}
              to={'/network'}
            >
              Network
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ParticlesBg
          color={theme.palette.background.partBg}
          type='circle'
          bg={true}
        />
        <Container maxWidth='md'>{props.children}</Container>
      </main>
    </div>
  );
}
