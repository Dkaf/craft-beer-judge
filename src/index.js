import React from 'react';
import { render } from 'react-dom';
import AppState from './app-state';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';


import './index.css';


const target = document.getElementById('root');

render(
  <App />,
  target,
  registerServiceWorker()
)
