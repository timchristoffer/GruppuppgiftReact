
import React from 'react';
import Feed from '../Feed/Feed';  // sökväg till Kalles komponent
import ProfilePage from '../profile/profile';  // sökväg till Hussens komponent
import Settings from '../SettingsPage/Settings';

export default function CentralContent({ showContent }) {
    return (
      <div id='centralContent'>
        <div id='content'> 
        {showContent === 0 && <Feed />}
        {showContent === 1 && <ProfilePage />}
        {showContent === 2 && <Settings />}
        </div>
      </div>
    );
  }