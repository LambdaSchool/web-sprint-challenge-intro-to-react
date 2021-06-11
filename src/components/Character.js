import React from 'react'
import Legends from "./Char"

export default function Characters(props) {
    const { chars } = props
    console.log(chars)
    return (
        <div className='char-container'>
            <div className='char-info'>
                <div>{chars.map(char => {
                    return <Legends key={char.name} char={char} props={props}/>
                })}</div>
            </div>
            </div>
    )
}
