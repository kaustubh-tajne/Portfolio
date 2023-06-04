import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../App";
import { useState } from "react";

const RenderMenu = () => {
  const [show, setShow] = useState(false);

  // const kaustubh = localStorage.getItem("state");
  if (localStorage.getItem("state") === "truekaustubh") {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/project">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/write">
            Write
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/project">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact">
            Contact
          </NavLink>
        </li>
      </>
    );
  }
  
};

const ToggleMenu = () => {
  const { state, dispatch } = useContext(UserContext);

  if (
    localStorage.getItem("state") == "true" ||
    localStorage.getItem("state") == "truekaustubh"
  ) {
    return (
      <>
        <NavLink to="/logout" role="button">
          <button className="btn buttonOff" type="button">
            Logout
          </button>
        </NavLink>
      </>
    );
  } else {
    return (
      <>
        <NavLink to="/login" role="button">
          <button className="btn buttonOff" type="button">
            Login
          </button>
        </NavLink>

        <NavLink to="/signup" role="button">
          <button className="btn buttonOff" type="button">
            Signup
          </button>
        </NavLink>

        {/* <NavLink to="/logout" role="button">
          <button className="btn buttonOff" type="button">
            Logout
          </button>
        </NavLink> */}
      </>
    );
  }
};

const Navbar = () => {
  return (
    <>
      <section className="navBar-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Kaustubh's Portfolio
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <RenderMenu />
              </ul>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <ToggleMenu />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
