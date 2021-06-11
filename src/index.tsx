import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
