import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Loading.css';
import App from './App';
import Title from './components/Title';
import Loading from './components/Loading';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Title />
      <Loading />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
