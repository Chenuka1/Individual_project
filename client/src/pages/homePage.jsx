import React, { useState } from 'react';
import '../styles/homepage.css';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(1);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 3 : prevImage - 1));
  };

  return (
    <div className="homepage-container">
      <img src={`slider${currentImage}.jpg`} alt={`Slider ${currentImage}`} />

      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
