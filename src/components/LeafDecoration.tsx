interface LeafDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

const LeafDecoration = ({ position, className = "" }: LeafDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 rotate-90';
      case 'bottom-left':
        return 'bottom-0 left-0 -rotate-90';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-180';
      default:
        return '';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} ${className}`}>
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-elegant-gold opacity-60"
      >
        <path 
          d="M10 20 Q20 5 35 10 Q50 15 45 30 Q40 45 25 40 Q10 35 15 20 Z" 
          fill="currentColor" 
          opacity="0.8"
        />
        <path 
          d="M25 35 Q35 25 45 30 Q55 35 50 45 Q45 55 35 50 Q25 45 30 35 Z" 
          fill="currentColor" 
          opacity="0.6"
        />
        <path 
          d="M15 45 Q25 35 35 40 Q45 45 40 55 Q35 65 25 60 Q15 55 20 45 Z" 
          fill="currentColor" 
          opacity="0.7"
        />
        <path 
          d="M30 60 Q40 50 50 55 Q60 60 55 70 Q50 80 40 75 Q30 70 35 60 Z" 
          fill="currentColor" 
          opacity="0.5"
        />
        <path 
          d="M45 25 Q55 15 65 20 Q75 25 70 35 Q65 45 55 40 Q45 35 50 25 Z" 
          fill="currentColor" 
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default LeafDecoration;