import React, { useState } from 'react';
import FeedInput from './FeedInput';
import { clearLocalStorage } from './FeedClear';

const Feed = () => { //Komponent deklareras
  const [posts, setPosts] = useState(getSavedPosts());

  const handlePostSubmit = (inputText) => {//hanterar nya inlägg
    const newPost = {
      id: Date.now(),//ger ny inlägg unikt id
      text: inputText,
    };

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));//uppdaterar local storage

    setPosts(updatedPosts);
  };

  const handleClearLocalStorage = () => {
    clearLocalStorage();//tar bort inlägg från local storage
    setPosts([]); // Tar bort inlägg från state
  };

  function getSavedPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];//hämtar sparade inlägg från locla storage
  }

  return (
    <div>
      <div>
        <FeedInput onSubmit={handlePostSubmit} />
        <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
      </div>
      <div>
        <h2>Flöde</h2>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>

      </div>
    </div>
  );
};

export default Feed;