import { Link } from 'react-router-dom';
import './MainMenu.css'
import React from 'react';
import Advertising from '../Advertising/Advertising'
import logo from '../Media/logo.png' 


// Funktion som skapar huvudmeny samt kallar på reklambanner i Advertising-funktionen
// funktionerna showFeed och showProfile skickas in för att användas på knapparna "Home" som ska visa flödet,
// och "Profile" som ska visa profilsidan. Knappen "Sign out" skickar ut användaren till sign-in-sidan via routes. 
// Knappen "Settings" skickar användaren till en separat settings-sida via routes. 
export default function MainMenu({ showFeed, showProfile, showSettings }) {
  return (<>
    <div id='menuButtons'>
    <img src={logo} id='logo'></img>
      <button onClick={showFeed}>Home</button>
      <button onClick={showProfile}>Profile</button>
      <button onClick={showSettings}>Settings</button>
      <Link to="/"><button id='signOut'>Sign out</button></Link>
    </div>
    
    <Advertising />
    </>
  );
}
