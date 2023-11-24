import { Link } from 'react-router-dom';
import './MainMenu.css'
import React from 'react';
import Advertising from '../Advertising/Advertising'

import logo from '../Media/logo.png';
import homeIcon from '../Media/home.png';
import profileIcon from '../Media/profile.png';
import settingsIcon from '../Media/settings.png';
import signOutIcon from '../Media/signout.png';

export default function MainMenu({ showFeed, showProfile }) {

  return (
    <>
      <div id='menuButtons'>
        <img src={logo} id='logo' alt='Logo'></img>
        <button onClick={showFeed}>
          <img src={homeIcon} alt='Home' className='icon' />
          Home
        </button>
        <button onClick={showProfile}>
          <img src={profileIcon} alt='Profile' className='icon' />
          Profile
        </button>
        <Link to="/settings">
          <button>
            <img src={settingsIcon} alt='Settings' className='icon' />
            Settings
          </button>
        </Link>
        <Link to="/">
          <button id='signOut'>
            <img src={signOutIcon} alt='Sign Out' className='icon' />
            Sign out
          </button>
        </Link>
      </div>

      <Advertising />
    </>
  );
}