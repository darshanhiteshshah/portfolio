import { useState } from 'react';

export default function FloatingLabel({ 
  label, 
  type = 'text', 
  value, 
  onChange,
  error,
  className = ''
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`peer w-full px-4 py-2 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-transparent focus:outline-none transition-all ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
        }`}
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused || value
            ? 'top-0 -translate-y-1/2 text-xs bg-slate-950 px-2 text-orange-500'
            : 'top-1/2 -translate-y-1/2 text-slate-400 text-base'
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
