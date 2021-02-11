import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ContextProvider } from './provider/context';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);