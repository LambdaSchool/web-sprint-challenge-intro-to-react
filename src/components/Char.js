import React from 'react'
import styled from 'styled-components'

const StyledLegends = styled.div`
width: 115px;
display: flex;
height: 75px;
align-content: center;
justify-content: center;
border-around: 3px;
&:hover{
    animation: rotate;
    color: red;
}
button{
    display: flex;
    background-color: green;
    justify-content: space-evenly;
    color: white;
    &:hover{
    color: purple;
    height: 65px;
    width: 75px;
    font-size: 27px;
}
}

`


export default function Legends({ char }) {
    console.log(char);
    function getYear({char}) {
        console.log(char.birth_year);
        console.log(char.name);
        return (
            <div>
                {char.name} was born in the year {char.birth_year}
            </div>
        )
    }
    return (
        <StyledLegends>
        <div className='Char-character'>
            {char.name}
            <button onClick={() => getYear({char})}>Birth Year</button>
        </div>
        </StyledLegends>
    )
}