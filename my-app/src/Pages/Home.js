import React from 'react';
import MainMenu from '../Components/MainMenu/MainMenu'
import CentralContent from '../Components/CentralContent/CentralContent';
import { useState } from "react";


const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <CentralContent showProfile={showProfile} />
      <MainMenu showProfile={() => setShowProfile(true)} showFeed={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;