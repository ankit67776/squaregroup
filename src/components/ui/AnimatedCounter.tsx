"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  className?: string;
  isPercentage?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000,
  className,
  isPercentage = false,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [endValue, duration, isVisible]);

  return (
    <span ref={ref} className={className}>
      {count}{isPercentage ? '%' : '+'}
    </span>
  );
};

export default AnimatedCounter;
