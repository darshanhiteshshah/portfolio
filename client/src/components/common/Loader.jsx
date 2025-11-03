export default function Loader({ 
  size = 'md', 
  variant = 'default',
  fullScreen = false,
  message = 'Loading...',
  className = ''
}) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const loaderContent = (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {/* Variant 1: Spinner */}
      {variant === 'default' && (
        <div className={`${sizeMap[size]} relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full blur-lg opacity-50 animate-pulse" />
          <div className={`${sizeMap[size]} border-4 border-slate-700 border-t-orange-500 border-r-blue-400 rounded-full animate-spin`} />
        </div>
      )}

      {/* Variant 2: Dots */}
      {variant === 'dots' && (
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      )}

      {/* Variant 3: Bars */}
      {variant === 'bars' && (
        <div className="flex gap-1 items-end">
          <div className="w-1 bg-gradient-to-t from-orange-500 to-blue-400 rounded-full animate-pulse" style={{ height: '20px', animationDelay: '0s' }} />
          <div className="w-1 bg-gradient-to-t from-orange-500 to-blue-400 rounded-full animate-pulse" style={{ height: '30px', animationDelay: '0.1s' }} />
          <div className="w-1 bg-gradient-to-t from-orange-500 to-blue-400 rounded-full animate-pulse" style={{ height: '25px', animationDelay: '0.2s' }} />
          <div className="w-1 bg-gradient-to-t from-orange-500 to-blue-400 rounded-full animate-pulse" style={{ height: '35px', animationDelay: '0.3s' }} />
        </div>
      )}

      {/* Variant 4: Gradient Ring */}
      {variant === 'ring' && (
        <div className={`${sizeMap[size]} relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-orange-500 to-blue-400 rounded-full p-1">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full animate-pulse" />
            </div>
          </div>
          <style>{`
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div className="absolute inset-0 animate-spin" style={{ animationName: 'rotate', animationDuration: '2s' }} />
        </div>
      )}

      {/* Message */}
      {message && (
        <p className="text-slate-300 font-semibold text-center">{message}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
}
