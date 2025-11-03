export default function GradientText({ 
  children, 
  variant = 'primary',
  className = ''
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent',
    reverse: 'bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent',
    neon: 'bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-pulse',
  };

  return (
    <span className={`font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
