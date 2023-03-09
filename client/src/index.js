import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router/appRoutes';
import './sass/styles.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
);

reportWebVitals();
