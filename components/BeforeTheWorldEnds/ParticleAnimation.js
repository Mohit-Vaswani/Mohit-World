import React, { useEffect } from 'react';

const ParticleAnimation = () => {
  let maxWidth = 0;
  let maxHeight = 0;

  if (typeof window !== "undefined") {
    maxWidth = window.screen.width;
    maxHeight = window.screen.height;
  }

  function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function Shadows(amount) {
    let shadow = "";
    for (let i = 0; i < amount; i++) {
      shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) + "px " + "rgb(255," + Random(0, 256) + "," + Random(0, 256) + "), ";
    }
    shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) + "px " + "rgb(255," + Random(0, 256) + "," + Random(0, 256) + ")";
    return (shadow);
  }

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      document.documentElement.style.setProperty('--shadows' + i, Shadows(100));
    }
  }, []);

  return (
    <div id="space">
      <div className="particle"></div>
    </div>
  );
}

export default ParticleAnimation;
