import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
	console.log('State after dispatch ', store.getState())
);

store.dispatch({type: 'count/increment', payload: 1});
store.dispatch({type: 'count/increment', payload: 1});
store.dispatch({type: 'count/increment', payload: 1});

store.dispatch({type: 'count/decrease', payload: 1});
store.dispatch({type: 'count/incrementOdd', payload: 1});

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
