import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
  <HttpsRedirect>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>
  </HttpsRedirect>,
  document.getElementById("root")
);
