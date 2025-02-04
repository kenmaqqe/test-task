import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Menu, MainPanel, ErrorPage } from "./Components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <main className="app">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Menu />
          <Routes>
            <Route path="/" element={<MainPanel />} />
            <Route path="/product-list" element={<MainPanel />} />
            <Route path="/my-account" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
