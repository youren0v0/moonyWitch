import * as React from "react"
import *as ReactDOM from "react-dom"
import App from "./app"
// import { Provider } from 'mobx-react';
// import stores from '@/store';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router >
        <App />
    </Router>

    , document.getElementById("app"))