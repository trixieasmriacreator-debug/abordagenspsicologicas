import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { GestaltView } from './components/GestaltView';
import { TccView } from './components/TccView';
import { SistemicaView } from './components/SistemicaView';
import { FocalView } from './components/FocalView';
import { ApproachId } from './types';

type ViewState = 'home' | ApproachId;

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Parse view from URL hash on initial load or popstate
  const getViewFromHash = useCallback((): ViewState => {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    if (hash === 'gestalt' || hash === 'gestalt-terapia') return 'gestalt';
    if (hash === 'tcc' || hash === 'terapia-cognitivo-comportamental') return 'tcc';
    if (hash === 'sistemica' || hash === 'terapia-familiar-sistemica') return 'sistemica';
    if (hash === 'psicoterapia-breve' || hash === 'breve-focal') return 'psicoterapia-breve';
    return 'home';
  }, []);

  // Listen to browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const targetView = getViewFromHash();
      setCurrentView(targetView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Check if initial hash is set, otherwise default to home
    const initialView = getViewFromHash();
    if (initialView !== 'home') {
      setCurrentView(initialView);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getViewFromHash]);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    const hashTarget = view === 'home' ? '' : `#/${view}`;
    if (window.location.hash !== hashTarget) {
      window.history.pushState({ view }, '', hashTarget || window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    navigateTo('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-[#E7DEC8] selection:text-[#1C1917]">
      {/* Top Header */}
      <Header currentView={currentView} onNavigateHome={handleBackToHome} />

      {/* Main Exhibition View */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomeView onSelectApproach={(id) => navigateTo(id)} />
        )}

        {currentView === 'gestalt' && (
          <GestaltView onBackToHome={handleBackToHome} />
        )}

        {currentView === 'tcc' && (
          <TccView onBackToHome={handleBackToHome} />
        )}

        {currentView === 'sistemica' && (
          <SistemicaView onBackToHome={handleBackToHome} />
        )}

        {currentView === 'psicoterapia-breve' && (
          <FocalView onBackToHome={handleBackToHome} />
        )}
      </main>
    </div>
  );
}
