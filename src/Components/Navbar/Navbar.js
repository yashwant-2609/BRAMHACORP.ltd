import React from "react";
import "./Navbar.css";

const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/bramhacorp logo.png" alt="" height='25'  ></img>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active " aria-current="page" href="/">
              <img src="/Whatsapp.svg" alt="" width="35" height="60"></img>
            </a>
            <a className="nav-link" href="/">
              <img src="/Phone.svg" alt="" width="35" height="60"></img>
            </a>
        
            {/* <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />

                <span />
                <span />
                <span />

                <ul id="menu">
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
                    <li>Info</li>
                  </a>
                  <a href="#">
                    <li>Contact</li>
                  </a>
                  <a href="https://erikterwan.com/" target="_blank">
                    <li>Show me more</li>
                  </a>
                </ul>
              </div>
            </nav> */}
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
