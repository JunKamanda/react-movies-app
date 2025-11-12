import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  //State

  //Comportement

  //Render
  return (
    <div className="navbar">
      <div className="title">
        <h1>React Movies</h1>
      </div>
      <div className="nav">
        <ul>
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/favorite">
                <li>Coup de Coeur</li>
            </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
