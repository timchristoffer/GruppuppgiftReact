import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch email from localStorage when the component mounts
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const setUser = (newUsername, newEmail) => {
    setUsername(newUsername);
    setEmail(newEmail);
    // Store email in localStorage
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
