import LeafDecoration from './LeafDecoration';
import lastPageImage from '@/assets/lastpage.webp';

const LastPage = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <LeafDecoration position="top-left" />
      <LeafDecoration position="top-right" />
      <LeafDecoration position="bottom-left" />
      <LeafDecoration position="bottom-right" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Couple Photo */}
        <div className="mb-8">
          <img 
            src={lastPageImage}
            alt="Judy e Hélder - Celebrating Love"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Message */}
        <div className="space-y-6">
          <p className="elegant-font text-2xl md:text-3xl text-script-text leading-relaxed">
            Contamos com sua presença para celebrar o nosso amor
          </p>
          
          <p className="script-font text-3xl md:text-4xl text-script-text">
            Com carinho, Judy & Hélder
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastPage;