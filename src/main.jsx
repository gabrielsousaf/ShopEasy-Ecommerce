import React from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import './index.css';
import { LoadingProvider } from './context/LoadingContext';
import Loading from './components/Loading/Loading';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <Router>
        <Loading />
        <Routes />
      </Router>
    </LoadingProvider>
  </React.StrictMode>,
);
