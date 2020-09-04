import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { RoutedContent } from "./routes";
import history from "./history";
import { AppBarContextProvider } from "./context/AppBar";

function App() {
  return (
    <Router history={history}>
        <AppBarContextProvider>
          <RoutedContent />
        </AppBarContextProvider>
    </Router>
  );
}

export default App;
