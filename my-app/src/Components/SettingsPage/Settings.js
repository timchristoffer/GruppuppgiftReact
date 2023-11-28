import React, { useState, useRef, useEffect } from 'react';
import './Settings.css'

const Settings = () => {
    const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
      };
    
    const [isBlack, setIsBlack] = useState(false);  
    const toggleColor = () => {
        setIsBlack((prevIsBlack) => !prevIsBlack);
        document.body.style.backgroundColor = isBlack ? 'white' : 'black';
    };

    const videoLink = () => {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    const [isFlipped, setIsFlipped] = useState(false);
    const flip = () => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped)
      document.body.style.transform = isFlipped ? 'rotate(0deg)' : 'rotate(180deg)';
    }

  return ( 
    <div id='settingsContainer'>
        <h1>Settings</h1>
        <button onClick={toggleColor}>
          {isBlack ? 'Light-Mode' : 'Dark-Mode'}
        </button>
        <button onClick={changeColor}>
            Generate Random Color
        </button>
        <button onClick={videoLink}>
          Terms and Conditions
        </button>
        <button onClick={flip}>
          Flip
        </button>
    </div>
  );
};

export default Settings;
