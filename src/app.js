import React from "react";
import { Helmet } from "react-helmet";
// Screens
import { Routes } from "react-router";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import MainRoutes from "./config/router/MainRoutes";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes children={MainRoutes} />
      </CssBaseline>
    </StyledEngineProvider>
  );
}
