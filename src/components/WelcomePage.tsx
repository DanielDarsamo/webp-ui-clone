import LeafDecoration from './LeafDecoration';
import welcomeImage from '@/assets/welcomepg.webp';

const WelcomePage = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <LeafDecoration position="top-left" />
      <LeafDecoration position="top-right" />
      <LeafDecoration position="bottom-left" />
      <LeafDecoration position="bottom-right" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Bible Verse */}
        <div className="mb-8">
          <h1 className="script-font text-3xl md:text-4xl text-verse-text mb-2 leading-relaxed">
            "O meu amado é meu, e eu sou dele"
          </h1>
          <p className="elegant-font text-lg text-body-text">
            (Cânticos dos Cânticos 2:16)
          </p>
        </div>
        
        {/* Couple Photo */}
        <div className="relative">
          <img 
            src={welcomeImage}
            alt="Judy e Hélder - Casal"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;