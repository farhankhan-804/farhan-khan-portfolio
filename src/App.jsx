import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function AppContent() {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen text-white transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-slate-900 to-purple-950' 
        : 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900'
    }`}>
        <BrowserRouter>
          <ScrollProgress />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400 mb-2">Something went wrong</h1>
            <p className="text-white/80 mb-4">The app failed to load. Try refreshing the page.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-2 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-400"
            >
              Refresh page
            </button>
          </div>
        </div>
      }
    >
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
