import { createMuiTheme } from '@material-ui/core';
// import { deepPurple, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#0067AC',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#0067AC',
    },
    primary: {
      main: '#0067AC',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#0067AC',
    },
  },
});

export default theme;
