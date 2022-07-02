import React, { Suspense } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import ThemeContextProvider from "./theme";

const App = () => {
  return (
    <Suspense fallback="loading...">
      <ThemeContextProvider>
      <AppBar />
      </ThemeContextProvider>
    </Suspense>
  );
};

export default App;
