import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated } = useAuth();

  // Om användaren inte är inloggad, skicka dem till inloggningssidan
  useEffect(() => {
    if (!isAuthenticated) {
      // Du kan också använda Navigate från react-router-dom här
      window.location.href = '/'; // eller Navigate('/login')
    }
  }, [isAuthenticated]);

  return (
    <div>
      {/* Ditt Home-komponents innehåll här */}
    </div>
  );
};

export default Home;