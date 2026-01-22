import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  //State

  //Comportement

  //Render
  return (
    <Navbar>
      <div className="nav">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Coup de Coeur</li>
          </NavLink>
        </ul>
      </div>
      <div className="title">
        <img src="./src/assets/play.png" alt="" />
        <h1>
          <span>R</span>eact <span>M</span>ovies
        </h1>
      </div>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: clamp(12px, 4vw, 50px);
  padding: 10px 0 30px;

  .nav {
    flex: 1 1 260px;
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(8px, 3vw, 20px);

      li {
        padding: 6px 14px;
        font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        border-radius: 6px;
        box-shadow: inset 0 0 20px #000;
        transition: 0.3s ease-in-out;

        &:hover {
          background: #ff0084;
        }
      }
      a.active li {
        background: linear-gradient(135deg, #ff0084, #b90060);
        transform: translateY(-2px);
      }
    }
  }
  .title {
    flex: 1 1 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;

    img {
      width: clamp(28px, 6vw, 40px);
      height: auto;
    }
    h1 {
      font-family: aristote;
      font-size: clamp(1rem, 3vw, 1.3rem);
    }
    span {
      color: #ff0084;
      text-shadow: 0px 8px 5px #fff;
      box-shadow: inset 0px 0px 20px 0px #000000;
      font-size: clamp(1.6rem, 6vw, 2.2rem);
    }
  }
`;
