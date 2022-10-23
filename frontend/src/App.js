import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./home/home";
import Actions from "./actions/Actions";
import DesignTest from "./designtest/design-test";
import "./App.css";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/automatetests" element={<Actions />} />
            <Route exact path="/designtests" element={<DesignTest />} />
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;