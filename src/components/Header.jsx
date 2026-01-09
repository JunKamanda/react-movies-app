import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  //State

  //Comportement

  //Render
  return (
<<<<<<< HEAD
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
=======
    <HeaderStyled>
      <div className="nav">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/favorite">
            <li>Coup de Coeur</li>
          </NavLink>
        </ul>
      </div>
      <div className="title">
        <h1>React Movies</h1>
      </div>
    </HeaderStyled>
>>>>>>> 31f42f9a7777b41c432a698a5dd79a8f99e8d71d
  );
};

export default Header;

<<<<<<< HEAD
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
=======
// StyledComponent
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;

  .nav {
    width: 45%;

    ul {
      display: flex;
      gap: 15px;

      li {
        color: #fff;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: .6rem;
      }
    }

    /* ACTIVE STYLE DU NAVLINK */
    .active li {
      background: #25004e;
    }

    a:hover li {
      background: #24004e61;
    }
  }

  .title {
    width: 55%;
    text-align: end;

    h1 {
      font-size: 1.5rem;
      font-family: "aristote";
    }
  }
`;
>>>>>>> 31f42f9a7777b41c432a698a5dd79a8f99e8d71d
