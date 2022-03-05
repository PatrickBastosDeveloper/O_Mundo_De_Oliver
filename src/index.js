import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  // <Provider store={ store }> 
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root'),
);

// O projeto só roda se as linhas 9 e 13 estão comentadas. Está retornando a msg de erro:
// react.development.js:1476 Uncaught Error: Invalid hook call.