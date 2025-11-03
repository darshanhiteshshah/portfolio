import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const animationVariants = {
    'fade-up': {
      hidden: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-down': {
      hidden: { opacity: 0, transform: 'translateY(-40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-left': {
      hidden: { opacity: 0, transform: 'translateX(40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'fade-right': {
      hidden: { opacity: 0, transform: 'translateX(-40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'scale': {
      hidden: { opacity: 0, transform: 'scale(0.95)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    'rotate': {
      hidden: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      visible: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
    },
    'zoom': {
      hidden: { opacity: 0, transform: 'scale(0.8)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    'flip': {
      hidden: { opacity: 0, transform: 'rotateY(90deg)' },
      visible: { opacity: 1, transform: 'rotateY(0deg)' },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const variant = animationVariants[animation] || animationVariants['fade-up'];
  const style = isVisible 
    ? { 
        ...variant.visible,
        transition: `all ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
        perspective: '1000px',
      }
    : variant.hidden;

  return (
    <div
      ref={ref}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
