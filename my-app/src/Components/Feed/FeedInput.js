import React from 'react';
import './Feed.css';

const FeedInput = ({ onSubmit }) => {
  const handlePostSubmit = (event) => {
    event.preventDefault();
    const inputText = event.target.elements.postText.value;
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      event.target.elements.postText.value = '';
    }
  };

  return (
    <form className="feed-input-container" onSubmit={handlePostSubmit}>
      <div className="feed-input">
        <input
          type="text"
          name="postText"
          placeholder="What's happening?"
          className="post-text-input"
        />
        <button type="submit-post" className="post-button">
          Post
        </button>
      </div>
    </form>
  );
};

export default FeedInput;
