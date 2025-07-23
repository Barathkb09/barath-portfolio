
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always start with light theme as default
    setDarkMode(false);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    
    // Check if user previously selected dark theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-purple-900 dark:via-indigo-900 dark:to-pink-950 text-slate-900 dark:text-slate-100 relative overflow-hidden">
        {/* Enhanced background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Large floating particles */}
          <div className="absolute top-1/4 left-1/6 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/30 dark:bg-cyan-400/40 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute top-3/4 right-1/5 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/30 dark:bg-pink-400/40 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 sm:w-4 sm:h-4 bg-cyan-300/20 dark:bg-emerald-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-green-400/30 dark:bg-yellow-400/40 rounded-full animate-bounce" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
          
          {/* Small floating particles */}
          <div className="absolute top-10 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-indigo-400/40 dark:bg-violet-400/50 rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400/30 dark:bg-orange-400/40 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4.5s'}}></div>
          <div className="absolute top-2/3 left-1/5 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-teal-400/40 dark:bg-lime-400/50 rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-10 left-2/3 w-1 h-1 sm:w-2 sm:h-2 bg-orange-400/30 dark:bg-red-400/40 rounded-full animate-bounce" style={{animationDelay: '3.5s', animationDuration: '5s'}}></div>
        </div>

        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <div className="w-full max-w-none">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
