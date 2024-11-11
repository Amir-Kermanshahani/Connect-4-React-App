import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Connect-4 React App</title>
      <desc>A simple React Application for playing the connect-4 cool game!</desc>
    </Helmet>
    <App />
  </>
);
