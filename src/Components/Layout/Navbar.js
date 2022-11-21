import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import "./navbar.css"


const Navbar = () => {
  return (
    <Router>
        <nav className='header' class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="position-sticky"/>
                <a class="navbar-brand" href="/">
                <img src="https://png.pngtree.com/png-vector/20210225/ourlarge/pngtree-shopping-logo-design-png-image_2951622.jpg" alt="Logo" width="70" class="d-inline-block align-text-top"/>
                </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" />
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>


<nav className="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark">
              <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a as={Link} href="/" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <span>Home</span>
                  </a>
                  <br/>
                  <a as={Link} href="/about" class="list-group-item list-group-item-action py-2 ripple">
                    <span>About</span></a>
                    <br/>
                  <a as={Link} href="/contact" class="list-group-item list-group-item-action py-2 ripple">
                    <span>Contact</span></a>
                    <br/>
                  <a as={Link} href="/signup" class="list-group-item list-group-item-action py-2 ripple">
                    <span>Signup</span></a>
                </div>
              </div>
            </nav>
            </nav>
          
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
    </Router>

  );
};

export default Navbar;

