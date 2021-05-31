// Write your Character component here
import React from "react";
import styled from "styled-components";

const ReactWars = styled.div`
  background-color: #debd9288;
  padding: 0.25em 2em;
  margin: 2em auto;
  width: 90%;
  text-align: left;
  border: 2px solid #e4a654;
`;

const Character = (props) => {
  const { char } = props;

  return (
    <ReactWars>
      <h1>{char.name}</h1>
    </ReactWars>
  );
};

export default Character;
