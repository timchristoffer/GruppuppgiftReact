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


  return ( 
    <div id='settingsContainer'>
        <h1>Settings</h1>
        <div>
            <input type='checkbox' id='colorToggle' onChange={toggleColor}/>
            <label for="colorToggle">Darkmode</label>
        </div>
        <button onClick={changeColor}>
            Generate Random Color
        </button>
        
    </div>
  );
};

export default Settings;
