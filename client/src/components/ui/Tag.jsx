export default function Tag({ 
  label, 
  onRemove,
  variant = 'default',
  className = ''
}) {
  const variants = {
    default: 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
    orange: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    tech: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${variants[variant]} ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-slate-100 transition"
        >
          ✕
        </button>
      )}
    </div>
  );
}
