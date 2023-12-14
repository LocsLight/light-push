import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import InfoSection from "./components/InfoSection";
import { homeObjOne, homeObjTwo } from "./components/InfoSection/Data";

function App() {
  return (
    <Router>
      <Home />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </Router>
  );
}

export default App;
