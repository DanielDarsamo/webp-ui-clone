import LeafDecoration from './LeafDecoration';
import HeartIcon from './HeartIcon';

const TimelinePage = () => {
  const handleHeartClick = () => {
    console.log('Heart clicked - interactive element');
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <LeafDecoration position="top-left" />
      <LeafDecoration position="top-right" />
      <LeafDecoration position="bottom-left" />
      <LeafDecoration position="bottom-right" />
      
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <p className="elegant-font text-xl text-body-text mb-6">
            Com a bênção de Deus e de seus pais
          </p>
          
          <div className="mb-8">
            <h1 className="script-font text-6xl md:text-7xl text-script-text mb-4 leading-tight">
              Judy
            </h1>
            <h1 className="script-font text-6xl md:text-7xl text-script-text leading-tight">
              e Hélder
            </h1>
          </div>
          
          <p className="body-font text-lg text-body-text max-w-xl mx-auto">
            Têm a honra de lhe convidar para celebrar seu casamento.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="space-y-8">
          {/* Civil Ceremony */}
          <div className="flex items-center justify-center space-x-4">
            <HeartIcon onClick={handleHeartClick} />
            <div className="border-t border-elegant-gold w-12"></div>
            <div className="text-left">
              <h3 className="body-font text-xl font-semibold text-script-text">
                Cerimônia Civil
              </h3>
            </div>
          </div>
          
          {/* Date and Time */}
          <div className="flex items-center justify-center space-x-4">
            <HeartIcon onClick={handleHeartClick} />
            <div className="border-t border-elegant-gold w-12"></div>
            <div className="text-left">
              <h3 className="body-font text-xl font-semibold text-script-text">
                15 de Novembro de 2025
              </h3>
              <p className="body-font text-lg text-body-text">
                Pelas 14:00
              </p>
            </div>
          </div>
          
          {/* Venue */}
          <div className="flex items-center justify-center space-x-4">
            <HeartIcon onClick={handleHeartClick} />
            <div className="border-t border-elegant-gold w-12"></div>
            <div className="text-left">
              <h3 className="body-font text-xl font-semibold text-script-text">
                The venue
              </h3>
              <p className="body-font text-lg text-body-text">
                Bairro Mahotas - Rua da igreja
              </p>
            </div>
          </div>
        </div>
        
        {/* Interactive Note */}
        <div className="mt-12">
          <p className="body-font text-sm text-body-text italic">
            clique no ícone para interragir
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;