import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Load Roboto typeface
require("typeface-roboto");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();