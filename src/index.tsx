import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const ApiListener = React.createContext([]);

ReactDOM.render(
  <React.StrictMode>
    <ApiListener.Provider value={[]}>
      <App />
    </ApiListener.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
