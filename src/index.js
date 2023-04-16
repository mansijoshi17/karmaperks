import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { theme } from './services/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@emotion/react';
import { KarmaContextProvider } from './context/context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AirdropContextProvider } from './context/AirdropContext';
import { CampaignContextProvider } from './context/CampaignContext'; 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AirdropContextProvider>
          <CampaignContextProvider>
            <KarmaContextProvider> 
              <App /> 
            </KarmaContextProvider>
          </CampaignContextProvider>
        </AirdropContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
