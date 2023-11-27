import MainMenu from '../Components/MainMenu/MainMenu'
import CentralContent from '../Components/CentralContent/CentralContent';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const { isAuthenticated } = useAuth();
  const [showContent, setShowContent] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/';
    }
  }, [isAuthenticated]);
  


  return (
    <div>
      <CentralContent showContent={showContent} />
      <MainMenu showFeed={() => setShowContent(0)} showProfile={() => setShowContent(1)} showSettings={() => setShowContent(2)}/>
    </div>
  );
};

export default Home;