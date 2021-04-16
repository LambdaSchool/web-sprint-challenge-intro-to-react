import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import StyledCharacter from './components/Character';


// import {handlers, data} from './mocks/handlers'

// const characterData = {
//   name: '',
//   height: '',
//   gender: ''
// }

// don't forget the dependency array
export default function App() {

  const [data, setData] = useState([])
  
// const baseURL = 'http://swapi.dev/'
  useEffect(() => { 
      axios
      .get('https://swapi.dev/people/')
      .then(res => 
        setData(res.data))
      
      .catch(error => { 
          console.log(error);
      })
  }
, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className = "App">
      <div className = "Header">
      <StyledCharacter character={characterData}/>
      </div>
    </div>
  )
}
