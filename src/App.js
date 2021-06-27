import './App.css';
import axios from "axios"
import React, { useState, useEffect } from "react";
import Character from "./components/Character"
import styled from 'styled-components';

const StyledTitle = styled.h1`
-webkit-text-stroke: 3px black;
-webkit-text-fill-color: yellow;
font-size:5rem;
color: white;
text-decoration: underline; 

`




const App = () => {
  const  [ character, setCharacter ] = useState([])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(info => {
      console.log(info)
      setCharacter(info.data)
    })

  }, [])


  

  return (
    <div className="App">
      <StyledTitle className="Header">Star WAR</StyledTitle>
      {character.map((char, i) => {
        return <Character key={i} char={char} />;
      })}
    <div class="meme"></div> 
    </div>
  
  );
  }

export default App;
