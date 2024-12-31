import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function TypewriterEffect({ text, speed = 100, delay = 1000 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsComplete(false);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, delay]);

  return <span className="font-mono">{displayText}</span>;
}