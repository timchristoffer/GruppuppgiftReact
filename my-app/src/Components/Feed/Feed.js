import React, { useState } from 'react';
import FeedInput from './FeedInput';
import { clearLocalStorage } from './FeedClear';
import { useUser } from '../../UserContext';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState(getSavedPosts());
  const { username } = useUser();

  const handlePostSubmit = (inputText) => {
    const newPost = {
      id: Date.now(),
      username: username,
      text: inputText,
      date: new Date().toLocaleString(), 
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
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    return savedPosts.reverse(); 
  }

  return (
    <div className="feed-container">
      <button onClick={handleClearLocalStorage} className="clear-button">
        Clear Local Storage
      </button>
      <div className="input-container">
        <FeedInput onSubmit={handlePostSubmit} />
      </div>
      <div className="feed-content">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <div className="post-header">
                <span className="username">{post.username}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <div className="post-text">{post.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
