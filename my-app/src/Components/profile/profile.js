import React from 'react';
import './profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <h1>User Profile</h1>
      </div>
        <div className="profile-page-content">
        <div className="profile-page-picture">
          {/* Include user profile picture here */}
          <img src="profile-picture.jpg" alt="User Profile" />
        </div>
            <div className="profile-page-details">
          <h2>Hussen Abdullahi</h2>
          <p>Email: Hussen@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
