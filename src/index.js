import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="ms-5 ps-4">
      <p>
        <a href="https://github.com/duygugurbuzyildiz/weather-project-react" target="_blank" rel="noreferrer">
          Open-source code
        </a>
        , by Duygu Gurbuz Yildiz from 
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">SheCodes
        </a>.
      </p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

