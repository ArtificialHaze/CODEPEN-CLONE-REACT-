import "./App.css";
import React from "react";
import Home from "./Home";
import DataProvider from "./DataProvider";

const App = () => {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
};

export default App;
