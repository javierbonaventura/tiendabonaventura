import "../bootstrap.min.css";
import logo from "../logo.svg";
import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <img src={logo} className="" alt="logo" width={50} />
      <a className="navbar-brand" href="#">
        CODERHOUSE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Entregable 5 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vinculo 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vinculo 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vinculo 3
            </a>
          </li>
        </ul>
      </div>
      <CartWidget enCarrito="4"/>
    </nav>
  );
}

export default NavBar;
