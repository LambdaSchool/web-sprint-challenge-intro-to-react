// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.p`
  display: flex;
  justify-content: center;
  color: ${({theme}) => theme.primaryColor};
  text-shadow: 1px 1px 5px ${({theme}) => theme.black};
  background-color: ${({theme}) => theme.secondaryColor};
  border: 1px solid ${({theme}) => theme.primaryColor};
  max-width: 30%;
  margin: 1% 35%;
  padding: 3%;
`

export default ({data}) => {
    if (data[0]) return data.map(({name, birth_year}) => <StyledCharacter>{name} born-{birth_year}</StyledCharacter>)
    return <p></p>
};