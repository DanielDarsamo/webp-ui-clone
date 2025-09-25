import { useState } from 'react';
import goldenHeart from '@/assets/golden_heart.webp';

interface EntrancePageProps {
  onEnter: () => void;
}

const EntrancePage = ({ onEnter }: EntrancePageProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSealClick = () => {
    setIsClicked(true);
    setShowAnimation(true);
    
    // Remove clicked animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
    
    // Hide animation effect and transition to main invite
    setTimeout(() => {
      setShowAnimation(false);
      onEnter();
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#d9d0c2] font-serif overflow-hidden">
      {/* Vertical line decoration */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#c4b8a8] transform -translate-x-1/2" />
      
      {/* Wax seal container */}
      <div 
        className={`relative cursor-pointer transition-all duration-300 ${
          isClicked ? 'animate-pulse' : ''
        }`}
        onClick={handleSealClick}
      >
        <div className="w-44 h-44 relative flex items-center justify-center">
          <img 
            src={goldenHeart}
            alt="Wax Seal" 
            className="w-full h-auto rounded-full shadow-lg transition-transform duration-500 hover:rotate-2 hover:scale-105"
          />
        </div>
        
        {/* Click text */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-[#7a5c46] text-base italic tracking-wide text-center">
          clique para abrir
        </div>
      </div>
      
      {/* Animation effect overlay */}
      {showAnimation && (
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-radial from-transparent via-white/20 to-transparent animate-fade-in" />
      )}
    </div>
  );
};

export default EntrancePage;