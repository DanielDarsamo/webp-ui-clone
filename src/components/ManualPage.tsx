import LeafDecoration from './LeafDecoration';
import HeartIcon from './HeartIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ManualPage = () => {
  const handleGiftListClick = () => {
    console.log('Lista de presentes clicked');
  };

  const handleConfirmPresenceClick = () => {
    console.log('Confirmar presença clicked');
  };

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3);
  const { elementRef: interactiveRef, isVisible: interactiveVisible } = useScrollAnimation(0.3);

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <LeafDecoration position="top-left" />
      <LeafDecoration position="top-right" />
      <LeafDecoration position="bottom-left" />
      <LeafDecoration position="bottom-right" />
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h1 className="script-font text-3xl sm:text-4xl lg:text-5xl text-script-text">
            Manual do convidado
          </h1>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
            contentVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          {/* Couple Illustrations */}
          <div className="flex justify-center space-x-6 sm:space-x-8 order-2 lg:order-1">
            {/* Woman in green dress */}
            <div className="text-center">
              <div className="w-24 h-36 sm:w-28 sm:h-42 lg:w-32 lg:h-48 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 150" className="w-full h-full">
                  {/* Woman figure */}
                  <ellipse cx="50" cy="25" rx="12" ry="15" fill="#D4A574"/> {/* Head */}
                  <path d="M35 45 Q50 40 65 45 L60 120 Q50 125 40 120 Z" fill="#7A8B4A"/> {/* Green dress */}
                  <rect x="45" y="120" width="10" height="25" fill="#D4A574"/> {/* Legs */}
                  <ellipse cx="50" cy="22" rx="8" ry="6" fill="#2C2C2C"/> {/* Hair */}
                </svg>
              </div>
            </div>
            
            {/* Man in tuxedo */}
            <div className="text-center">
              <div className="w-24 h-36 sm:w-28 sm:h-42 lg:w-32 lg:h-48 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 150" className="w-full h-full">
                  {/* Man figure */}
                  <ellipse cx="50" cy="25" rx="12" ry="15" fill="#D4A574"/> {/* Head */}
                  <rect x="40" y="40" width="20" height="35" fill="#FFFFFF"/> {/* White shirt */}
                  <rect x="38" y="40" width="24" height="80" fill="#1A1A1A"/> {/* Black tuxedo */}
                  <rect x="45" y="120" width="10" height="25" fill="#1A1A1A"/> {/* Legs */}
                  <ellipse cx="50" cy="22" rx="8" ry="6" fill="#2C2C2C"/> {/* Hair */}
                  <rect x="47" y="45" width="6" height="15" fill="#1A1A1A"/> {/* Bow tie */}
                </svg>
              </div>
            </div>
          </div>
          
          {/* Guidelines */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-3">
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Confirme sua presença
              </p>
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Traje formal - casual
              </p>
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Branco é a cor da noiva
              </p>
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Não atrapalhe os fotógrafos
              </p>
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Seja pontual
              </p>
              <p className="body-font text-base sm:text-lg text-script-text font-semibold">
                Aproveite bastante
              </p>
            </div>
          </div>
        </div>
        
        {/* Interactive Elements */}
        <div 
          ref={interactiveRef}
          className={`mt-12 sm:mt-16 space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${
            interactiveVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 py-3">
            <div className="flex items-center justify-center touch-manipulation">
              <HeartIcon onClick={handleGiftListClick} />
            </div>
            <p className="body-font text-lg sm:text-xl text-script-text font-semibold text-center">
              Lista de presentes
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 py-3">
            <div className="flex items-center justify-center touch-manipulation">
              <HeartIcon onClick={handleConfirmPresenceClick} />
            </div>
            <p className="body-font text-lg sm:text-xl text-script-text font-semibold text-center">
              Confirmar presença
            </p>
          </div>
          
          {/* Interactive Note */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="body-font text-xs sm:text-sm text-body-text italic">
              clique nos ícones para interragir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualPage;