import React from "react";
import { hot } from "react-hot-loader";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>MERN KickStart</h1>
                <p>Welcome to MERN Stack Simple KickStart!</p>
            </header>
        </div>
    )
};

export default hot(module)(App);