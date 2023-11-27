import React, { useState, useEffect } from 'react';
import FeedInput from './FeedInput';
import { clearLocalStorage } from './FeedClear';
import { useUser } from '../../UserContext';
import './Feed.css';

import happy from '../Media/happy.png'
import sad from '../Media/sad.png'

const Feed = () => {
  const [posts, setPosts] = useState(getSavedPosts());
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const { username } = useUser();

  useEffect(() => {
    // Initialize likes and dislikes from local storage
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    const savedDislikes = JSON.parse(localStorage.getItem('dislikes')) || {};
    setLikes(savedLikes);
    setDislikes(savedDislikes);
  }, []);

  const handlePostSubmit = (inputText) => {
    const newPost = {
      id: Date.now(),
      username: username,
      text: inputText,
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
    };

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    setLikes({ ...likes, [newPost.id]: 0 });
    setDislikes({ ...dislikes, [newPost.id]: 0 });
  };

  const handleClearLocalStorage = () => {
    clearLocalStorage();
    setPosts([]);
    setLikes({});
    setDislikes({});
  };

  const handleLike = (postId) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes, [postId]: (prevLikes[postId] || 0) + 1 };
      localStorage.setItem('likes', JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  const handleDislike = (postId) => {
    setDislikes((prevDislikes) => {
      const updatedDislikes = { ...prevDislikes, [postId]: (prevDislikes[postId] || 0) + 1 };
      localStorage.setItem('dislikes', JSON.stringify(updatedDislikes));
      return updatedDislikes;
    });
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
              <div className="post-actions">
                <button className='likeButton' onClick={() => handleLike(post.id)}>
                  <img src={happy} alt="Like" />
                  <span>({likes[post.id]})</span>
                </button>
                <button className='dislikeButton' onClick={() => handleDislike(post.id)}>
                  <img src={sad} alt="Dislike" />
                  <span>({dislikes[post.id]})</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;


