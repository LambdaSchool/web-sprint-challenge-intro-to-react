import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Characters from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res) => {
      console.log('It worked!!!! :)', res)
      setCharacters(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Star Wars!!!</h1>
      <Characters data={characters}/>
    </div>
  );
}

export default App;
