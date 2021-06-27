import React from "react";
import styled from 'styled-components';


const StyledDiv = styled.div`
-webkit-text-stroke: 1.8px black;
-webkit-text-fill-color: yellow;
font-size:2.3rem;
color: white;
`

const StyledName = styled.h2`
font-size:4rem;
-webkit-text-stroke: 2.2px black;
-webkit-text-fill-color: yellow;
`


// Write your Character component here
// const Character = (props) => {
    // const [name, setName] = useState()
    // const [gender, setGender] = useState()
    // const [birthYear, setBirthYear] = useState()
    // const [mass, setMass] = useState()
    // const [height, setHeight] = useState()
    // const [skinColor, setSkinColor] = useState()
    // const [eyeColor, setEyeColor] = useState()
    // const [hairColor, setHairColor] = useState()

  
    // useEffect(() => {
    //   axios.get(`https://swapi.dev/api/people`)
    //   .then(info => {
    //     setName(info.data.name);
    //     setGender(info.data.gender);
    //     setBirthYear(info.data.birth_year); 
    //     setHeight(info.data.height);
    //     setSkinColor(info.data.skin_color);
    //     setEyeColor(info.data.eye_color);
    //     setHairColor(info.data.hair_color);
  
                    // })    
                    // }, [])


const Character = (props) => {
    const { char } = props; 
                    return (
                        <StyledDiv>
                          <StyledName>{char.name}</StyledName>
                          <p>Gender: {char.gender}</p>
                          <p>Birth Year: {char.birth_year}</p>
                          <p>Height: {char.height}</p>
                          <p>Skin Color: {char.skin_color}</p>
                          <p>Eye Color: {char.eye_color}</p>
                          <p>Hair Color: {char.hair_color}</p>
                          </StyledDiv>
                      );
                    };

export default Character;