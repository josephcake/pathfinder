import React, { useState } from "react";
import "./App.css";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Intro from "./Popup/Intro";
import { Legend } from "./Legend/Legend";

function App() {
  const [intro, setIntro] = useState(true);
  const toggleIntro = () => {
    setIntro(!intro);
  };
  return (
    <div className="App">
      <Nav setIntro={toggleIntro} />
      <Legend />
      <Main />
      <Footer />
      {intro && <Intro setIntro={toggleIntro} />}
    </div>
  );
}

export default App;
