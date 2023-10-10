import React from "react";
import "./App.css";
import AppBarComponent from "./components/AppBar";
import CategoryBlock from "./components/CategoryBlock";
import WorldMap from "./components/WorldMap";

const App = () => {
  return (
    <div className="app">
      <AppBarComponent />
      <CategoryBlock />
      <WorldMap />
    </div>
  );
};

export default App;
