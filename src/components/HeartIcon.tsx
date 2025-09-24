interface HeartIconProps {
  className?: string;
  onClick?: () => void;
}

const HeartIcon = ({ className = "", onClick }: HeartIconProps) => {
  return (
    <div 
      className={`inline-block cursor-pointer ${className}`}
      onClick={onClick}
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-elegant-gold hover:scale-110 transition-transform"
      >
        <path 
          d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.4 6 14.5 7.2 16 9C17.5 7.2 19.6 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z" 
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Decorative inner pattern */}
        <circle cx="12" cy="12" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="20" cy="12" r="1.5" fill="rgba(255,255,255,0.2)" />
        <path 
          d="M16 15 L14 17 L16 19 L18 17 Z" 
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
    </div>
  );
};

export default HeartIcon;