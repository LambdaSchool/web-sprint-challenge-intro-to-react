import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const WrapDiv = styled.div`
margin: 0 auto;
display: flex;
flex-flow: column;
width: 100%
`

const Para = styled.div`
color: black;
width: 100%
padding: 2%;
`

const Character = () => {
    const [charactersList, setCharactersList] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => {
            setCharactersList(res.data.results)
        })
        .catch(err => {console.log(err)})
    }, [])

    
    return (
        <WrapDiv>
            {charactersList.map((character, index) => {
                console.log(character)
                return (
                    <Para id={`card-${index}`} key={index}>
                        <p>Name: {character.name}</p>
                        <div class='panel' onClick={el => {el.stopPropagation()}}>
                            <p>Gender: {character.gender}</p>
                            <p>Height: {character.height}</p>
                            <p>Mass: {character.mass}</p>
                            <p>Birth Year: {character.birth_year}</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                        </div>
                    </Para>
                )
            })}
        </WrapDiv>
    )
}

export default Character;