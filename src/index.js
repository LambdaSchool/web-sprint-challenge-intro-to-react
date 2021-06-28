// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
worker.start();

//I DO NOT KNOW WHAT IS wrong. I have looked at notes, followed videos and I cannot find the problem.

ReactDOM.render(<App />, document.getElementById("root"));
