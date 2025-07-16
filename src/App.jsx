import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="reveal-layer"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {isRevealed && (
        <main className="p-8 relative z-10">
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex justify-between items-center mb-20"
          >
            <h1 className="text-2xl font-bold">Johan</h1>
            <ul className="flex gap-6 text-sm uppercase tracking-wider">
              <li><a href="#about" className="hover:underline">À propos</a></li>
              <li><a href="#projects" className="hover:underline">Projets</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold mb-4">Salut, je suis Johan 👋</h2>
            <p className="text-lg max-w-xl mx-auto text-gray-400">
              Développeur passionné, créateur de solutions modernes et élégantes. Bienvenue sur mon portfolio.
            </p>
          </motion.section>

          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">Projets</h3>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-300">[Image NGReact]</span>
              </div>
              <h4 className="text-xl font-bold">NGReact</h4>
              <p className="text-sm text-gray-400 mt-2">
                Microentreprise spécialisée dans le développement React et Next.js. Conception de projets web modernes et performants.
              </p>
            </div>
          </motion.section>
        </main>
      )}
    </div>
  );
}