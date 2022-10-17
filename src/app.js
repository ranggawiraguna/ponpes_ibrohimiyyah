import React from "react";
import MainRoutes from "./config/router/MainRoutes";
import themes from 'config/theme/AppTheme';
import { Helmet } from "react-helmet";
import { Routes } from "react-router";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

export default function App() {
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(sidebarReducer)}>
        <CssBaseline>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Routes children={MainRoutes} />
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
