import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AIChatBot } from './components/AIChatBot';
import { AnimatePresence, motion } from 'framer-motion';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          NEXUS
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="py-8 text-center text-slate-600 text-sm glass-card mt-20">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Tailwind & Gemini AI.</p>
        </footer>
      </div>

      <AIChatBot />
    </div>
  );
};

export default App;