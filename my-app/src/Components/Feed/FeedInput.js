import React from 'react';

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
    <form onSubmit={handlePostSubmit}>
      <input type="text" name="postText" placeholder="Skriv ditt inlägg här" />
      <button type="submit">Posta</button>
    </form>
  );
};

export default FeedInput;