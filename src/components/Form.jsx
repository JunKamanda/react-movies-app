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

    input {
      padding: 5px;
      text-align: center;
      border: none;
      width: 300px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      outline: none;
        font-size: 1rem;
    }
    button {
      padding: 5px 10px;
      background: #25004e;
      color: #fff;
      border: none;
      width: 300px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      cursor: pointer;
          font-size: 1rem;
    }
  }
`;
