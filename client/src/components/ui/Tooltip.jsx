import { useState } from 'react';

export default function Tooltip({ 
  text, 
  children,
  position = 'top',
  className = ''
}) {
  const [show, setShow] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2 -translate-x-1/2 left-1/2',
    bottom: 'top-full mt-2 -translate-x-1/2 left-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>

      {show && (
        <div className={`absolute ${positionClasses[position]} bg-slate-950 text-slate-100 px-3 py-2 rounded-lg text-sm whitespace-nowrap z-50 border border-slate-700 shadow-lg`}>
          {text}
        </div>
      )}
    </div>
  );
}
