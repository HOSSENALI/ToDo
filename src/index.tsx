import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/custom-styles.css";
import { Provider } from "react-redux";
import Store from "./redux/store/Store";
import reportWebVitals from "./reportWebVitals";
import  { createRoot } from 'react-dom/client'
//Set a store.......................
let store = Store();
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals();
