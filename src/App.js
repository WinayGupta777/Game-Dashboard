import React from "react";
import "./App.css";
import AppBarComponent from "./components/AppBar";
import HeaderButton from "./components/HeaderButton";

const App = () => {
  return (
    <div className="app">
      <AppBarComponent />
      <HeaderButton title={"Android Apps"} />
    </div>
  );
};

export default App;
