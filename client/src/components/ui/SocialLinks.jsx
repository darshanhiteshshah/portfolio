import { socialLinks as defaultSocialLinks } from '../../data/socialLinks';

export default function SocialLinks({ 
  links = defaultSocialLinks,
  size = 'md',
  variant = 'icon',
  className = ''
}) {
  const sizeMap = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-14 h-14 text-3xl',
  };

  const variantStyles = {
    icon: 'bg-transparent text-slate-300 hover:text-orange-500',
    button: 'bg-blue-400/20 border border-blue-400/30 text-blue-300 hover:bg-orange-500/20 hover:border-orange-500/30 hover:text-orange-300',
    filled: 'bg-gradient-to-r from-blue-400 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/50',
    outlined: 'border-2 border-slate-400 text-slate-300 hover:border-orange-500 hover:text-orange-500',
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.platform}
          className={`
            ${sizeMap[size]}
            ${variantStyles[variant]}
            flex items-center justify-center
            rounded-lg
            transition-all duration-300
            hover:scale-110
            hover:shadow-lg
          `}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
