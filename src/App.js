import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Main from "./components/Main/Main";

const App =  ()  => {
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <main>
                <Main/>
                <About/>
            </main>
        </div>
    </div>
  );
}

export default App;
