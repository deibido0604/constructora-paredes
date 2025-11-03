import { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  height = "400px",
  width = "100%",
  transitionDuration = 10000,
  afterPauseDuration = 20000,
  restartDelay = 2000
}) => {
  const [sliderPosition, setSliderPosition] = useState(100);
  const animationRef = useRef(null);
  const beforeImageRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let state = "animating";

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / transitionDuration, 1);

      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const newPosition = 100 - 100 * ease;
      setSliderPosition(newPosition);

      if (beforeImageRef.current) {
        beforeImageRef.current.style.width = `${newPosition}%`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (state === "animating") {
        state = "afterPause";
        setTimeout(() => {
          state = "restartPause";
          setSliderPosition(0);
          if (beforeImageRef.current) beforeImageRef.current.style.width = '0%';

          setTimeout(() => {
            startTime = null;
            state = "animating";
            setSliderPosition(100);
            if (beforeImageRef.current) beforeImageRef.current.style.width = '100%';
            animationRef.current = requestAnimationFrame(animate);
          }, restartDelay);
        }, afterPauseDuration);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [transitionDuration, afterPauseDuration, restartDelay]);

  return (
    <div 
      className="before-after-container"
      style={{
        height,
        width,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${afterImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div 
        ref={beforeImageRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${sliderPosition}%`,
          height: '100%',
          backgroundImage: `url(${beforeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default BeforeAfterSlider;
