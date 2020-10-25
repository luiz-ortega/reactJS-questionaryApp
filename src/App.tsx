import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './styles/theme';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default App;
