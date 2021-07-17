/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.5 intro to react sprint challenge
 * character.js
 * 7/16/2021
 **/

//Import statements
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Character from "./components/Character";
import styled from "styled-components";

//Named style component for the title 
const PageTitle = styled.title`
  font-family: 'Times New Roman';
  font-size: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #C0C0C0; 
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
`

//App function definition
const App = () => 
{
  //Declare the state variable and set function, init to []
  const [characters, setCharacters] = useState([]);

  //UseEffect() effect hook function definition
	useEffect(() => 
  {
		    
    //Axios gets data from the url
		axios.get("https://swapi.dev/api/people")
		
    //then() function
    .then((res) => 
    {
      //Invoke the setCharacter function, setting the returned data to []
			setCharacters(res.data)
		})
    
    //catch() if there is an error obtaining data
		.catch(err => 
    {
      //If the Falcon's engines won't fire, log the error
			console.log("They told me they fixed it. I trusted them to fix it. It's not my fault! (Han Solo)", err)
		});

  //Empty array to prevent infinite calls
	}, [])


  //Define the return function
  return (
    <div class = "App">
    <h1 class = "Header"> Star Wars Project </h1>

    {/* Render the title */}
    <PageTitle>React Wars</PageTitle>
    
    {/* Render the characters */}
    <Character characters={ characters }/>
    </div>
  );
}

//Export statement
export default App;
