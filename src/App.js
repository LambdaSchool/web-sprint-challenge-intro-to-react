import React, { useEffect, useState } from 'react';
import './App.css';
import { data } from './mocks/handlers'
import Characters from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [char, setChar] = useState(data)
useEffect()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>   
       <Characters character={char} />
    </div>

  );
}

export default App;
