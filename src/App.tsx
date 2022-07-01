import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foo from "./components/Foo";

const App = () => {
  return (
    <Suspense fallback="cargando ...">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Foo />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Suspense>
  );
};

export default App;
