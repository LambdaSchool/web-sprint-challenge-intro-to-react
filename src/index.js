// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/browser";
export const BASE_URL = 'http://localhost:3000/'
export const API_KEY = 'xyz'
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
