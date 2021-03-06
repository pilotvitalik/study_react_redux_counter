import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CssBaseline from '@material-ui/core/CssBaseline';

import { fetchTodos } from './store/reducers/countSlice';

store.dispatch(fetchTodos)

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
	  	<CssBaseline />
	    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
