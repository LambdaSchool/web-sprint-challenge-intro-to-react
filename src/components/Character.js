/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.5 intro to react sprint challenge
 * character.js
 * 7/16/2021
 **/

// Write your Character component here

//Import statements
import React from "react";
import styled from "styled-components";

//Named style component for the cards
const SagaCards = styled.div`
  font-family: 'Times New Roman';
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #C0C0C0; 
  text-align: center;
  max-width: 550px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  border: white;
`

const TopDiv = styled.div`
  color: black;
`

//Character function definition, pass in characters
const Character = ({ characters }) => 
{
  //Return function
  return (
    <TopDiv>
      {characters.map(data => 
      {
        return (
          <SagaCards>
            <h2>{ data.name }</h2>
            <p>Mass: { data.mass }</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Skin color: {data.skin_color}</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Birth year: {data.birth_year}</p>
            <p>Gender: {data.gender}</p>
          </SagaCards>
        )
      })}
      </TopDiv>
    )
  }

  //Export statement
  export default Character 