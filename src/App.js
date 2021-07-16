import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character"
import "./App.css";

const H1 = styled.h1`
color: #FFD700;
  text-shadow: 1px 1px 5px #483D8B;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <H1 className="Header">Characters</H1>
      <Character data={data}/>
    </div>
  );
}

export default App;
