import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Link as RouterLink, Route, Switch} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d05ce3',
      main: '#9c27b0',
      dark: '#6a0080',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff77a9',
      main: '#ec407a',
      dark: '#b4004e',
      contrastText: '#ffffff',
    },
  },
  typography: {
      fontFamily: ['Bodoni Moda', 'serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      colorInherit: {
        fontFamily: ['Oswald', 'sans-serif'].join(','),
        fontSize: 18,
      },
      outlinedSizeLarge:{
        fontSize: 18,
      }
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
