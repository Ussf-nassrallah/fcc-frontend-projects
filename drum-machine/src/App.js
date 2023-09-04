import React, { useState } from 'react';
import { l } from './soundsData';

const Key = ({ clip, volume, setRec }) => {
  const [active, setActive] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRec((prev) => prev + clip.keyTrigger + " ");
  }

  return (
    <div onClick={playSound} className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"} drum-pad`} id={clip.id}>
      <audio className='clip' id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )
}

const App = () => {
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(0.5);
  const [rec, setRec] = useState("");

  const playRec = () => {
    let index = 0;
    let recArray = rec.split(" ");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(() => clearInterval(interval), speed * 600 * recArray.length - 1);
  }

  return (
    <div className='bg-info min-vh-100 text-white' id="drum-machine">
      <div className='text-center' id="display">
        <h2 className='py-3'>Drum Machine</h2>
        { l.map((clip) => (
          <Key key={clip.id} clip={clip} volume={volume} setRec={setRec} />
        ))}
        <br />
        <h4>Volume</h4>
        <input
          type='range'
          step='0.01'
          value={volume}
          max='1'
          min='0'
          className='w-50'
          onChange={(e) => setVolume(e.target.value)}
        />
        <p>{rec}</p>
        {rec && (
          <>
            <div>
            <button onClick={playRec} className='btn btn-success'>Play</button>
            <button onClick={() => setRec("")} className='btn btn-danger'>Clear</button>
            </div>
            <h4>Speed</h4>
            <input
              type='range'
              step='0.01'
              value={speed}
              max='1.2'
              min='0.1'
              className='w-50'
              onChange={(e) => setSpeed(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App