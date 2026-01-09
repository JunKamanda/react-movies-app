import React from 'react';
import styled from 'styled-components';

const Form = () => {
    //State

    //Comportement

    //Render
    return (
        <div>
            <Search action="submit">
                <input type="text" name="search" id="search" placeholder='Nom du film'/>
                <button type="submit">Rechercher</button>
            </Search>
        </div>
    );
};

export default Form;

const Search = styled.form`
    display: none;
`