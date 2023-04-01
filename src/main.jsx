import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import reducers from "./reducers";
import "semantic-ui-css/semantic.min.css";

import App from "./App";

const store = createStore(reducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </Router>
    </Provider>
  </React.StrictMode>
);
