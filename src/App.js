import React from 'react';
import { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios';

import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then((data) => {
      setCharacters(data.data);
      // console.log(data.data)
    })
    .catch(e => {console.log(e)})
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character props={characters} />
    </div>
  );
}

export default App;
