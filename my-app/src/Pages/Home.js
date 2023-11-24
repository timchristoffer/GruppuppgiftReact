import MainMenu from '../Components/MainMenu/MainMenu'
import CentralContent from '../Components/CentralContent/CentralContent';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const { isAuthenticated } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/';
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