import React, { useState, useEffect } from 'react';
import './Advertising.css';

// Array med sökvägar till bilder i public/images-mappen.
const imageSources = [
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',
  '/images/image9.png',
  '/images/image10.png',
];

export default function Advertising() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // växlar mellan de olika sökvägarna i "imageSource"
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  // bestämmer hur lång tid varje bild ska visas
  useEffect(() => {
    const intervalId = setInterval(changeImage, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="advertisement">
      <img src={imageSources[currentImageIndex]} alt={`Advertisement ${currentImageIndex + 1}`} />
    </div>
  );
}
