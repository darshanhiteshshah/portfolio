export default function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-full inline-block';

  const variants = {
    default: 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
    orange: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    success: 'bg-green-500/20 text-green-300 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-300 border border-red-500/30',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </span>
  );
}
