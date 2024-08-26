import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const basename = import.meta.env.MODE === 'production' ? '/Site-Entreprise' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>

      <App />

    </BrowserRouter>
  </React.StrictMode>
);