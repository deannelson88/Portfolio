import React from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {SnackbarProvider} from 'notistack';
import {darkTheme, lightTheme } from '../styles/theme';

const Root = (props) => {
  const {store, history} = props;
  const darkMode = false;
  const getTheme = () => {
    if (darkMode)
      return darkTheme;
    else
      return lightTheme;
  };

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={getTheme()}>
          <CssBaseline/>
          <SnackbarProvider maxSnack={3}>
            <App/>
          </SnackbarProvider>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
