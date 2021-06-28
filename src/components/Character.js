// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const Characters = (props) => {

    const { data } = props

    return (
        <Card>
            {data.map((character) => {
                return (
                    <IndividualCard>
                        <h1> Name:<br></br> {character.name}</h1>
                        <h2>DOB:<br></br> {character.birth_year}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Height: {character.height}</h2>
                    </IndividualCard>
                )
            })}
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`
const IndividualCard = styled.div`
    width: 30em;
    border: 1px solid black;
    margin: 2vh 2vh;
    border-radius: 15px;
    background-color: #C2B280;
`



export default Characters