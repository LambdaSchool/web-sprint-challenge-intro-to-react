// Write your Character component here
import React from 'react';
import styled from 'styled-components';

function Character(props) {
    const characterInfo = props.props;

    return (
        <WrapperDiv>
            {characterInfo.map(info => {
                return (
                    <WrapperDiv>
                        <Paragraph>{info.name}</Paragraph>
                        <p>Height: {info.height}</p>
                        <p>Mass: {info.mass} </p>
                        <p>Hair color: {info.hair_color}</p>
                        <p>Skin color: {info.skin_color}</p>
                        <p>Eye color: {info.eye_color}</p>
                        <p>Birth year: {info.birth_year}</p>
                        <p>Gender: {info.gender}</p>
                    </WrapperDiv>
                );
            })}
        </WrapperDiv>         
    );
}





export default Character;



const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;




const Paragraph = styled.p`
    font-size: 25px;
    font-weight: bold;
`;