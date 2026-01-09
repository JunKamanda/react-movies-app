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
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/favorite">
                <li>Coup de Coeur</li>
            </NavLink>
        </ul>
      </div>
      <div className="title">
        <img src="./src/assets/play.png" alt="" />
        <h1>React Movies</h1>
      </div>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0 50px;

  .nav{

    ul{
      display: flex;
      align-content: center;
      justify-content: center;
      gap: 20px;

      li{
        padding: 5px 10px;
        border-radius: 5px;
        transition: .3s all ease-in;
        font-size: 1.1rem;

        &:hover{
          background: #939393;
        }
      }
    }
  }
  .title{
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
    h1{
      font-family: aristote;
      font-size: 1.3rem;
    }
  }
`
