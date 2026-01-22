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
        <h1><span>R</span>eact <span>M</span>ovies</h1>
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
        box-shadow: inset 0px 0px 20px 0px #000000;

        &:hover{
          background: #ff0084;
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
    span{
      color: #ff0084;
      text-shadow: 0px 8px 5px #fff;
      box-shadow: inset 0px 0px 20px 0px #000000;
      font-size: 2.2rem;
    }
  }
`
