import { useState, useEffect } from 'react';

export default function Notification({ 
  message, 
  type = 'info',
  duration = 3000,
  onClose,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-500/20 border-green-500/50 text-green-300',
    error: 'bg-red-500/20 border-red-500/50 text-red-300',
    warning: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300',
    info: 'bg-blue-400/20 border-blue-400/50 text-blue-300',
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '!',
    info: 'ℹ',
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-8 left-8 z-50 animate-fade-in ${className}`}>
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur ${typeStyles[type]}`}>
        <span className="text-xl font-bold">{icons[type]}</span>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
}
