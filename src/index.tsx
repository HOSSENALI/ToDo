
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/custom-styles.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './redux/store/Store';


//Set a store.......................
let store = Store();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
