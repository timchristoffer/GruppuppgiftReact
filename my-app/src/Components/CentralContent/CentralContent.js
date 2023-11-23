
import React from 'react';
import Feed from '../MainMenu/Feed';  // sökväg till Kalles komponent
import ProfilePage from '../MainMenu/Profilepage';  // sökväg till Hussens komponent
import './CentralContent.css';

export default function CentralContent({ showProfile }) {
    return (
      <div id='centralContent'>
        <div id='content'>
          {showProfile ? (
            <ProfilePage />
          ) : (
            <Feed />
          )}
        </div>
      </div>
    );
  }