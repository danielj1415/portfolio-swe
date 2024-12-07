import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.jsx";

function App() {

  return (
    <div>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
