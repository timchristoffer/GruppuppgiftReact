import React, { useEffect } from 'react';
import './profile.css';
import { useUser } from '../../UserContext';
import { getRandomProfilePic } from '../LoginSignup/LoginSignup.jsx';

const ProfilePage = () => {
  const { username, email, setUser } = useUser();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setUser(username, storedEmail);
    }
  }, [username, setUser]);

  // Use getRandomProfilePic() to get a random profile picture
  const profilePic = getRandomProfilePic();

  return (
    <div className="profile-page-container">
      <div className="profile-page-content">
        <div className="profile-page-picture">
          {/* Use the random profile picture */}
          <img src={profilePic} alt="User Profile" />
        </div>
        <div className="profile-page-details">
          <h2>User</h2>
          <h3>{username}</h3>
          <h2>Email: </h2>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;