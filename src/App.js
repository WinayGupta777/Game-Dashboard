import React from "react";
import "./App.css";
import AppBarComponent from "./components/AppBar";
import CategoryBlock from "./components/CategoryBlock";

const App = () => {
  return (
    <div className="app">
      <AppBarComponent />
      <CategoryBlock />
    </div>
  );
};

export default App;
