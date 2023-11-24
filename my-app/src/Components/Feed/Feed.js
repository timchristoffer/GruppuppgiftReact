import React, { useState } from 'react';
import FeedInput from './FeedInput';
import { clearLocalStorage } from './FeedClear';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../UserContext';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState(getSavedPosts());
  const { username } = useUser();

  const handlePostSubmit = (inputText) => {
    const newPost = {
      id: Date.now(),
      text: inputText, // Display only the inputText without the username
    };

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setPosts(updatedPosts);
  };

  const handleClearLocalStorage = () => {
    clearLocalStorage();
    setPosts([]);
  };

  function getSavedPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
  }

  return (
    <div className="feed-container">
      <div className="input-container">
        <FeedInput onSubmit={handlePostSubmit} />
        <button onClick={handleClearLocalStorage} className="clear-button">
          Clear Local Storage
        </button>
      </div>
      <div className="feed-content">
        <h2 className="feed-header">Flöde</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <span className="username">{username}:</span> {post.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
