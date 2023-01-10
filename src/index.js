import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import axios from 'axios'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './logic/store';

// axios default code
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(request => {
  return request;
},
  error => {
     console.log(error);
    return Promise.reject(error);
  });
axios.interceptors.response.use(response => {
  return { status: response.status, data: response.data.data };
},
  error => {
    console.log(error.response);
    return Promise.reject(error);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
