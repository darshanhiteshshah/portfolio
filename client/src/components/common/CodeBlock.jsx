import { useState } from 'react';

export default function CodeBlock({ 
  code, 
  language = 'javascript',
  showLineNumbers = true,
  className = ''
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-800/50">
        <span className="text-sm font-semibold text-slate-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 text-xs bg-orange-500/20 text-orange-300 rounded hover:bg-orange-500/30 transition"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm text-slate-300 font-mono">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="w-8 text-right pr-4 text-slate-600 select-none">
                  {index + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
