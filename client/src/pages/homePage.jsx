import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/homepage.css';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

import Doctor from '../assets/Doctor.jpg';
import nurse from '../assets/nurse2.jpg';
import vaccine from '../assets/vaccine2.jpg';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(1);

  // Define interval duration in milliseconds (e.g., 5 seconds)
  const intervalDuration = 5000;

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
  };

  // Function to switch to the previous slide
  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 3 : prevImage - 1));
  };

  // Function to get the image based on the current slide index
  const getImage = () => {
    switch (currentImage) {
      case 1:
        return slider1;
      case 2:
        return slider2;
      case 3:
        return slider3;
      default:
        return slider1; // Default to slider1 in case of unexpected state
    }
  };

  useEffect(() => {
    // Set up an interval to switch slides
    const slideInterval = setInterval(nextSlide, intervalDuration);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(slideInterval);
  }, [currentImage]); // Re-run effect whenever currentImage changes

  return (
    <div className="homepage-container">
  <br />
  <img
    src={getImage()}
    alt={`Slider ${currentImage}`}
    className="slider-image"
  />

  <div className="welcome">
    <br />
    <h1>Welcome to Baby care!</h1>
  </div>
  <div className='imageinfo'>
    <div className="image-container">
      <img src={Doctor} alt="image of a doctor" />
      <button className="info-button" onClick={() => navigate('/details')}>Details</button>
    </div>
    <div className="image-container">
      <img src={nurse} alt="image of nurse" />
      <button className="info-button" onClick={() => navigate('/services')}>Services</button>
    </div>
    <div className="image-container">
      <img src={vaccine} alt="baby gets vaccine" />
      <button className="info-button" onClick={() => navigate('/email')}>send email</button>
    </div>
  </div>
</div>

  );
}
