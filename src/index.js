import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// 1. Import Provider from react-redux
import { Provider } from "react-redux";
// 2. Import store from its folder location.
import store from "./reducers/store";

ReactDOM.render(
  <React.StrictMode>
    {/* 3. Use the Provider component ti wrap the App component and add the atrributte "store" the the oppenning tag and set it equal to the store value. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
