// src/App.js
import React from "react";
import Car from "./components/car";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting />
      <Car model="Toyota" />
      <Car model="BMW" />
    </div>
  );
}

export default App;
