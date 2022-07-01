import React, { Suspense } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";

const App = () => {
  return (
    <Suspense fallback="loading...">
      <AppBar />
    </Suspense>
  );
};

export default App;
