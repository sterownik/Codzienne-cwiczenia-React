import React from "react";
// bez sciezki bo prawidlowo rozpozna bez kropki node-modules
import { render } from "react-dom";
import "./index.css";
// jesli jest w tym samym katalogu to kropka
import App from "./components/App";
// bez .js

// z tego co importuje, nazwe okreslamy przy imporcie
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
