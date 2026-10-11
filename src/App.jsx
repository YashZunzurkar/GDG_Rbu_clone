import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import MeetTeam from './components/MeetTeam';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <UpcomingEvents />
        <MeetTeam />
        <FAQ />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
