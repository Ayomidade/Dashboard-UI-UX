import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
<<<<<<< HEAD
import React, { StrictMode } from "react";
=======
import react, { StrictMode } from "react";
>>>>>>> a549880a7243b55005b40d67d56503bcaa2325dc
import store from "./brain/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
