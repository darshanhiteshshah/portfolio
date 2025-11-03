import { useState, useEffect } from 'react';

export default function ScrollToTop({ 
  threshold = 300,
  className = '',
  variant = 'button'
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Variant 1: Floating Button */}
      {variant === 'button' && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-gradient-to-r from-blue-400 to-orange-500 text-white p-3 rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 transition-all hover:scale-110 z-40 animate-fade-in ${className}`}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Variant 2: Floating Circular Progress */}
      {variant === 'progress' && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 ${className}`}
        >
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="2"
                opacity="0.2"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray={`${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 125.6} 125.6`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#ff8c42" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* Variant 3: Side Indicator */}
      {variant === 'indicator' && (
        <button
          onClick={scrollToTop}
          className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 group ${className}`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm font-semibold text-slate-400 group-hover:text-orange-500 transition opacity-0 group-hover:opacity-100">
              Top
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-orange-500 rounded-full group-hover:shadow-lg group-hover:shadow-orange-500/50 transition" />
            <svg className="w-5 h-5 text-orange-500 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 16V4m0 0L3 8m0 0l4-4l4 4M17 8v12m0 0l4-4m0 0l-4 4l-4-4" />
            </svg>
          </div>
        </button>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
