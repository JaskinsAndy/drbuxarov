import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './BeforeAfterCard.css';

interface BeforeAfterCardProps {
  title: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ title }) => {
  const [isResizing, setIsResizing] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing || !slider || !resizeRef.current || !handleRef.current) return;
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = Math.max(0, Math.min(x, rect.width));
      resizeRef.current.style.width = `${width}px`;
      handleRef.current.style.left = `${width}px`;
    };

    const onMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isResizing]);

  const onMouseDown = () => {
    setIsResizing(true);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <div ref={sliderRef} className="ba-slider">
        <img src="white_teeth.jpg" alt="After" />
        <div ref={resizeRef} className="resize">
          <img src="yellow_teeth.jpg" alt="Before" />
        </div>
        <div
          ref={handleRef}
          className="handle"
          onMouseDown={onMouseDown}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BeforeAfterCard;
