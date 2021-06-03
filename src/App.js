
import React, { useEffect, useState } from 'react';
import Character from './components/Character'

// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const axios = require('axios');

function App() {
 const [item , setItem] = useState([])
 const [films, setFilms ] =useState({});
 const [detail, setDetail ] =useState(false)
//  console.log("the films are here", films)

 useEffect(()=>{
  axios
  .get('https://swapi.dev/api/people')
  .then(res=>{
    setItem(res.data)
    setFilms(res.data)
  })
  
  .catch(err=>{
    console.log("I got something wrong ", err)
  })
 },[])

function click(id){
   films.map((film,index) => 
     film.id === id ?setFilms({...film}): setDetail(false)      
    
  )
}
 return (   
      <div className="App">
         <h1 className="Header">Characters</h1>
         <Character  key={item}item={item}  click={click}/>
         
     </div>
 );
}

export default App;
