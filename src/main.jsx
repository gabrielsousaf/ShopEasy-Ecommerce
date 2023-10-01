import React from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
);
