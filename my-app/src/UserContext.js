import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []); 

  const setUser = (newUsername, newEmail) => {
    setUsername(newUsername);
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  return (
    <UserContext.Provider value={{ username, email, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
