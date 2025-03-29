import React, { useState, useEffect } from "react";
import "../styles.css";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const API_URL = "https://picsum.photos/v2/list?page=1&limit=5";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const imageUrls = data.map((img) => img.download_url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return <p>Loading...</p>;

  return (
    <div className="slider-container">
      <img src={images[index]} alt="slide" className="slider-image" />

      <button onClick={prevSlide} className="slider-arrow left-arrow">←</button>
      <button onClick={nextSlide} className="slider-arrow right-arrow">→</button>

      <div className="slider-dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
