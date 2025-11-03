export default function Card({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) {
  const baseStyles = 'bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6';

  const hoverStyles = hover ? 'hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2' : '';

  const variants = {
    default: '',
    elevated: 'shadow-lg shadow-slate-900/50',
    flat: 'border-0 shadow-none',
    gradient: 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-orange-500/20',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
