import React, { useState, useEffect} from 'react';
import Character from "./components/Character";
import axios from "axios";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then(res => {
        console.log(res, "Response Sucessful");
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log(error, "Sorry Not Now");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {characters.map((character) => {
          return(
            <Character 
              key={character.id}
              name={character.name}
              gender={character.gender}
              birth_year={character.birth_year}
              eye_color={character.eye_color}
              hair_color={character.hair_color}
              skin_color={character.skin_color}
              height={character.height}
              mass={character.mass}
              homeworld={character.homeworld}
            />
          )
        })}
    </div>
  );
}

export default App;
