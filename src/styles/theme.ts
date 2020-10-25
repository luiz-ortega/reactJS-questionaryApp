import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#0067AC',
      secondary: '#FFFFFF',
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
