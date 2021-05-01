import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import App from "./Components/App.component";
import ErrorBoundary from './Components/ErrorBoundary';
import "./index.scss";

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById("root"));
