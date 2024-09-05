import Header from "./components/header/header"
import Login from "./components/Login/Login"
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Login/>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App