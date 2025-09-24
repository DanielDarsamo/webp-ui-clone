import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import WelcomePage from '@/components/WelcomePage';
import TimelinePage from '@/components/TimelinePage';
import ManualPage from '@/components/ManualPage';
import LastPage from '@/components/LastPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentPage((prev) => (prev + 1) % 4);
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev - 1 + 4) % 4);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <WelcomePage />;
      case 1:
        return <TimelinePage />;
      case 2:
        return <ManualPage />;
      case 3:
        return <LastPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
