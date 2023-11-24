import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const Settings = () => {
  const { isAuthenticated } = useAuth();

  // Om användaren inte är inloggad, skicka dem till inloggningssidan
  useEffect(() => {
    if (!isAuthenticated) {
      // Du kan också använda Navigate från react-router-dom här
      window.location.href = '/'; // eller Navigate('/login')
    }
  }, [isAuthenticated]);

  return (
  <h1>Test Hej hej hej!!!!!!111one</h1>);

}

export default Settings;