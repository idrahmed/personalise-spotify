import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SavedTracksProvider from './components/SavedTracksContext'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  type: 'success',
}

ReactDOM.render(
  <React.StrictMode>
    
    <AlertProvider template={AlertTemplate} {...options}>
    <SavedTracksProvider>
    <App />
    </SavedTracksProvider>
    </AlertProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
