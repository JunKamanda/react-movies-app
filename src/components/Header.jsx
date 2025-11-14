import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  //State

  //Comportement

  //Render
  return (
    <HeaderStyled>
      <div className="nav">
        <ul>
          <NavLink to="/">
            <li className="active">Accueil</li>
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
  );
};

export default Header;

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
        padding: 5px;
        border-radius: 10px;
        font-size: .5rem;

        &.active {
          background: #25004e;
        }
        &:hover {
          background: #24004e61;
        }
      }
    }
  }
  .title {
    width: 55%;
    text-align: end;

    h1{
      font-size: 1.5rem;
      font-family: "aristote";
    }
  }
`;
