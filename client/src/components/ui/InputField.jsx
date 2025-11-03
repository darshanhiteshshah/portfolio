export default function InputField({ 
  label, 
  type = 'text', 
  placeholder, 
  error,
  required = false,
  className = '',
  ...props 
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-slate-300 font-semibold mb-2">
          {label}
          {required && <span className="text-orange-500">*</span>}
        </label>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-slate-500 transition-all ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' 
            : 'border-slate-600 focus:border-orange-500 focus:ring-orange-500/30'
        } focus:outline-none focus:ring-2`}
        {...props}
      />
      
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
