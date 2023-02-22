import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
// import Components from "./components/Components";
import Layout from "layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/components" element={<Components />} /> */}
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
