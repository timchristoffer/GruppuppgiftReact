import MainMenu from '../Components/MainMenu/MainMenu'
import CentralContent from '../Components/CentralContent/CentralContent';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const { isAuthenticated } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  // Om användaren inte är inloggad, skicka dem till inloggningssidan
  useEffect(() => {
    if (!isAuthenticated) {
      // Du kan också använda Navigate från react-router-dom här
      window.location.href = '/'; // eller Navigate('/login')
    }
  }, [isAuthenticated]);
  


  return (
    <div>
      <CentralContent showProfile={showProfile} />
      <MainMenu showProfile={() => setShowProfile(true)} showFeed={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;