import React, { Component } from "react";
import "../style/bootstrap/js/src/collapse.js";



class Navbar extends Component {
  state = {};
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <nav
      className="py-3 navbar navbar-expand-lg  auto-hiding-navbar navbar-light"
        style={{ backgroundColor: "skyblue" , display: "flex"}}
      >
        <div className="container">
          <a className="navbar-brand py-0" href="/html/index.html" target="_blank"><span></span></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-1">
                <a className="nav-link" href="/html/index.html">
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/events">
                  <b>Events</b>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/students">
                  <b>Students</b>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/contact">
                  <b>Contact</b>
                </a>
              </li>

              <li className="nav-item mx-1">
                {!user && (
                  <a className="nav-link" href="/login">
                    <b>Login</b>
                  </a>
                )}

                {user && (
                  <a className="nav-link" href="/profile">
                    <b> {user.email}</b>
                  </a>
                )}
              </li>
              <li className="nav-item mx-1">
                {user && (
                  <a className="nav-link" href="/logout">
                    <b> Logout</b>
                  </a>
                )}

                {!user && (
                  <a className="nav-link" href="/register">
                    <b> Join</b>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
