import WelcomePage from '@/components/WelcomePage';
import TimelinePage from '@/components/TimelinePage';
import ManualPage from '@/components/ManualPage';
import LastPage from '@/components/LastPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WelcomePage />
      <TimelinePage />
      <ManualPage />
      <LastPage />
    </div>
  );
};

export default Index;
