import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "utils/redux/store";
import * as serviceWorker from "./serviceWorker";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./config/style/flexboxgrid.min.css";
import "./config/style/index.css";
import 'assets/scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
