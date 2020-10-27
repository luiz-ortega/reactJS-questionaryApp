import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#666666',
    },
    primary: {
      main: '#0067AC',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#0067AC',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
