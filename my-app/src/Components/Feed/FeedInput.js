import React, { useState } from 'react';
import './Feed.css';

const FeedInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      setInputText('');
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const characterCount = 250 - inputText.length;

  return (
    <form className="feed-input-container" onSubmit={handlePostSubmit}>
      <div className="feed-input">
        <input
          type="text"
          name="postText"
          placeholder="What's happening?"
          className="post-text-input"
          maxLength={250}
          value={inputText}
          onChange={handleInputChange}
        />
        <span className="character-counter">{characterCount}/250</span>
        <button type="submit-post" className="post-button">
          Post
        </button>
      </div>
    </form>
  );
};

export default FeedInput;
