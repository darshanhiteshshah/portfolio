import { useEffect, useRef, useState } from 'react';

export default function ParallaxScroll({ 
  children, 
  speed = 0.5,
  className = ''
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
          setOffset(window.pageYOffset * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={`transition-transform duration-100 ${className}`}
    >
      {children}
    </div>
  );
}
