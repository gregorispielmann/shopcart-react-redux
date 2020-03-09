import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import '~/config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
      </Router>
    </Provider>
  );
}

export default App;
