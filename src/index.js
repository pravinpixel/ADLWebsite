import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import 'bootstrap/dist/js/bootstrap.js'

// Vendors Css
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/fancybox.min.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/aos.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
import './assets/css/header.css'
import './assets/css/main.css'
import './assets/css/footer.css' 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

 