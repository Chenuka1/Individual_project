//homepage
import React, { useState, useEffect } from 'react';
import UseAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/homepage.css';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';
import vaccineImage from '../assets/vaccines.png'
import record from '../assets/medical record.jpg'
import growth from '../assets/babygrowth1.png'

export default function HomePage() {
  
 
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
      <img 
        src={getImage()} 
        alt={`Slider ${currentImage}`} 
        className="slider-image"
      />

      <div className="welcome">
        <br></br>
        <h1>Welcome to Baby care!</h1>
        
      </div>
      <div className='imageinfo'>
        <div className="image-container">
          <img src={vaccineImage} alt="Vaccine" />
        </div>
        <div className="image-container">
          <img src={record} alt="medical record" />
        </div>
        <div className="image-container">
          <img src={growth} alt="growth cycle" />
        </div>
      </div>
    </div>
  );
}
