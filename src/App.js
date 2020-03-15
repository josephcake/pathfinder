import React from "react";
import "./App.css";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { Legend } from "./Legend/Legend";

function App() {
  return (
    <div className="App">
      <Nav />

      <Legend />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
