import React, { useRef } from 'react';
import './App.css';
import image from './logo512.png'
function Card() {
  const cardRef = useRef(null);
  const tittleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const defultButtonRef = useRef(null);
  const startButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return; // Prevents accessing null
    const { left, top, width, height } = card.getBoundingClientRect(); // Fixed typo
    const x = (e.clientX - left) / width - 0.5; // Fixed clientX typo
    const y = (e.clientY - top) / height - 0.5; // Fixed clientY typo

    const rotateX = y * 30;
    const rotateY = x * 30;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // Fixed template literal and space issue
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'none';
    tittleRef.current.style.transform = 'translateZ(150px)';
    imageRef.current.style.transform = 'translateZ(200px) rotateY(-45deg)'; // Added .current
    descriptionRef.current.style.transform = 'translateZ(125px)'; // Added .current
    defultButtonRef.current.style.transform = 'translateZ(100px)'; // Added .current
    startButtonRef.current.style.transform = 'translateZ(75px)'; // Added .current
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.5s'; // Changed property from style.transform to style.transition
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    tittleRef.current.style.transform = 'translateZ(0px)';
    imageRef.current.style.transform = 'translateZ(0px) rotateY(0deg)'; // Added .current
    descriptionRef.current.style.transform = 'translateZ(0px)'; // Added .current
    defultButtonRef.current.style.transform = 'translateZ(0px)'; // Added .current
    startButtonRef.current.style.transform = 'translateZ(0px)'; // Added .current
  };

  return (
    <div 
      className='card'
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='sneaker-image' ref={imageRef}>
        <div className='cricle'></div>
        <img src={image} alt='react pic' />
      </div>
      <div className='info'>
        <h1 className='tittle' ref={tittleRef}>React</h1> 
        <p className='description' ref={descriptionRef}>Text</p> 
      </div>
      <div className='difficulty-buttons' ref={defultButtonRef}>
        <button>Easy</button>
        <button>Advance</button>
        <button>Hard</button>
        <button>Pro</button>
      </div>
      <div className='start-button' ref={startButtonRef}>
        <button>Start</button>
      </div>
    </div>
  );
}

export default Card;
