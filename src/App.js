import React from "react";
import "./App.css";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Intro from "./Popup/Intro";
import { Legend } from "./Legend/Legend";

function App() {
  return (
    <div className="App">
      <Nav />
      <Legend />
      <Main />
      <Footer />
      <Intro />
    </div>
  );
}

export default App;
