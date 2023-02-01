import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import HardSkill from "./components/HardSkill/HardSkill";
import SoftSkill from "./components/SoftSkill/SoftSkill";
import NavProvider from "./context/navContext";

const App =  ()  => {
  return (
    <div className="App">
        <NavProvider>
        <div className="container">
            <Header/>
            <main>
                <Main/>
                <About/>
                <HardSkill/>
                <SoftSkill/>
            </main>
        </div>
        </NavProvider>
    </div>
  );
}

export default App;
