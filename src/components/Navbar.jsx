import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie'

const Navbar = () => {
  const [cookies]=useCookies();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Secrets
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {cookies.jwt!=null?
            <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="https://secret-web.netlify.app/secret-page">
                Home
              </NavLink>
            </li>
            <NavLink className="nav-link active" aria-current="page" to="https://secret-web.netlify.app/log-out">
                Logout
              </NavLink>
            </>
            :
            <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="https://secret-web.netlify.app/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="https://secret-web.netlify.app/secret-page">
                User
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="https://secret-web.netlify.app/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="https://secret-web.netlify.app/contact">
                Contact Us
              </NavLink>
            </li>
            </>

          }
         
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
