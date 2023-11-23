import { Link } from 'react-router-dom';
import './MainMenu.css'
import React from 'react';
import Advertising from '../Advertising/Advertising'


export default function MainMenu({ showFeed, showProfile }) {
  return (<>
    <div id='menuButtons'>
      <button onClick={showFeed}>Home</button>
      <button onClick={showProfile}>Profile</button>
      <Link to="/settings"><button>Settings</button></Link>
      <Link to="/signin"><button id='signOut'>Sign out</button></Link>
    </div>
    <Advertising />
    </>
  );
}