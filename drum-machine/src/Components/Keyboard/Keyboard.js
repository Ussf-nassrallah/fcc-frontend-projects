import React from 'react'
import "./Keyboard.scss"

const Keyboard = ({firstSoundsGroup, play}) => {
  return (
    firstSoundsGroup.map(sound => {
        return <button
            key={sound.key}
            className='drum-pad'
            onClick={() => play(sound.key)}
        >
            {sound.key}
            <audio
                className='clip'
                id={sound.key}
                src={sound.url}
            >
            </audio>
        </button>
    })
  )
}

export default Keyboard