import 'assets/font/FontFace.css';
import React from 'react';
import MainRoutes from './config/router/MainRoutes';
import themes from 'config/theme/AppTheme';
import { Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

export default function App() {
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(sidebarReducer)}>
        <CssBaseline />
        <Routes children={MainRoutes} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
