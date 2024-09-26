import React from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MyContainer from "./layout/MyContainer";
import Header from "./components/Header";
import Login from "./components/NewLogin";
import Home from "./components/Home";
import About from "./components/About";

function App() {

  const aboutName = "Kolmas komponent"

  return (
    <Router>
      <MyContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About name={aboutName} />} />
        </Routes>
      </MyContainer>
    </Router>
  )
}

export default App
