import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Character from './components/Character'


const App = () => {
  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      setCharacters(res.data.results)
      console.log(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}/> 
    </div>
  );
}

export default App;
