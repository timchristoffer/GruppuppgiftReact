import { Link } from 'react-router-dom';
import './MainMenu.css'
import React from 'react';
import Advertising from '../Advertising/Advertising'
import logo from '../Media/logo.png' 



export default function MainMenu({ showFeed, showProfile }) {
  return (<>
    <div id='menuButtons'>
    <img src={logo} id='logo'></img>
      <button onClick={showFeed}>Home</button>
      <button onClick={showProfile}>Profile</button>
      <Link to="/settings"><button>Settings</button></Link>
      <Link to="/"><button id='signOut'>Sign out</button></Link>
    </div>
    
    <Advertising />
    </>
  );
}
