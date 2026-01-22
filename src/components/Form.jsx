import React from "react";
import styled from "styled-components";

const Form = () => {
  //State

  //Comportement

  //Render
  return (
    <FormStyled>
      <form action="submit">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Nom du film"
        />
        <button type="submit">Rechercher</button>
      </form>
      <div className="filter">
        <button className="top">Top 👆🏾👆</button>
        <button className="down">Flop 👇👇🏾</button>
      </div>
    </FormStyled>
  );
};

export default Form;

//-----------------------------------------
//Styled Components
//-----------------------------------------

const FormStyled = styled.div`
  margin: 0px 0 20px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 15px;

    input {
      padding: 5px;
      text-align: center;
      border: none;
      width: 500px;
      border-radius: 3px;
      outline: none;
        font-size: 1rem;
    }
    button {
      padding: 5px 10px;
      background: #b90060;
      color: #fff;
      border: none;
      width: 500px;
      cursor: pointer;
      font-size: 1rem;
      box-shadow: inset 0px 0px 20px 0px #000000;
      transition: 0.3s all ease-in;

      &:hover{
        background: #ff0084;
      }
    }
  }
  .filter {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 40px;

    button{
      padding: 7px 20px;
      background: #b90060;
      box-shadow: inset 0px 0px 20px 0px #000000;
      transition: 0.3s all ease-in;
      color: #fff;
      border: none;
      cursor: pointer;

        &:first-child:hover{
        background: #ff0084;
        transform: translateY(-2px);
      }
        &:last-child:hover{
        background: #ff0084;
        transform: translateY(2px);
      }
  }
}
`;
