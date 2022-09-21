import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux-toolkit/app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>
);
