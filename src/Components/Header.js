import React from 'react'
import meme from '../img/meme.png'

export default function Header(props) {
    return (
        <header>
            <img src={meme} alt='problem' />
            <p>MEME GENERATOR</p>
        </header>
    )
}
