import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white font-sans relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]">
      <header className="absolute top-0 left-0 w-full px-14 py-6 flex justify-between items-center border-b border-gray-800 z-20">
        <h1 className="text-xl font-semibold">Johan</h1>
        <nav>
          <ul className="flex gap-10 text-sm text-gray-300 uppercase tracking-wide">
            <li>
              <a
                href="#about"
                className="hover:text-white"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="absolute inset-0 bg-black z-50 origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {isRevealed && (
        <main>
          <section
            className="min-h-screen flex items-center justify-center px-6 pt-32"
            id="about"
          >
            <div className="flex flex-col items-center gap-10 max-w-4xl w-full">
              <motion.img
                src="/photo-pro.png"
                alt="Johan"
                className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              />

              <div className="text-center max-w-xl">
                <motion.h1
                  className="text-5xl md:text-6xl font-extrabold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                >
                  Salut, je suis
                  <br />
                  Johan <span className="inline-block">👋</span>
                </motion.h1>  

                <motion.p
                  className="text-lg text-gray-300 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                >
                  Développeur passionné, créateur de solutions modernes et
                  élégantes. Bienvenue sur mon portfolio.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-6 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <a
                    href="https://www.linkedin.com/in/johan-rivet-a3955b375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] hover:bg-[#084B99] text-white px-6 py-3 rounded-xl font-medium shadow transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/R-Johan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#333] hover:bg-[#444] text-white px-6 py-3 rounded-xl font-medium shadow transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="/cv-angular-modeSombre.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow transition"
                  >
                    Télécharger CV
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.6 }}
              >
                {[
                  {
                    name: 'HTML5',
                    icon: (
                      <SiHtml5 className="text-orange-500 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'CSS3',
                    icon: <SiCss3 className="text-blue-500 text-3xl mx-auto" />,
                  },
                  {
                    name: 'TailwindCSS',
                    icon: (
                      <SiTailwindcss className="text-cyan-400 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'JavaScript',
                    icon: (
                      <SiJavascript className="text-yellow-400 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'TypeScript',
                    icon: (
                      <SiTypescript className="text-blue-400 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'Angular',
                    icon: (
                      <SiAngular className="text-red-500 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'Node.js',
                    icon: (
                      <SiNodedotjs className="text-green-500 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'Git',
                    icon: (
                      <SiGit className="text-orange-400 text-3xl mx-auto" />
                    ),
                  },
                  {
                    name: 'GitHub',
                    icon: <SiGithub className="text-white text-3xl mx-auto" />,
                  },
                  {
                    name: 'Figma',
                    icon: (
                      <SiFigma className="text-pink-500 text-3xl mx-auto" />
                    ),
                  },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-900 text-white py-4 px-4 rounded-lg shadow border border-gray-800"
                  >
                    {skill.icon}
                    <p className="mt-2 text-sm text-center">{skill.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          {/* À propos de moi */}
          <section
            id="aboutme"
            className="py-32 px-6 border-t border-gray-800"
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              À propos de moi
            </motion.h2>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image style anime */}
              <img
                src="/photo-anime.png"
                alt="Johan version anime"
                className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
              />

              {/* Texte de présentation */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionné par le développement web, je suis spécialisé dans la
                création d'interfaces intuitives, performantes et esthétiques.
                Mon parcours m’a permis d’explorer des technologies modernes
                comme Angular, TailwindCSS ou TypeScript. Mon objectif :
                concevoir des expériences numériques impactantes et sur mesure,
                en combinant rigueur technique et créativité.
              </p>
            </motion.div>
          </section>

          {/* Projets */}
          <section
            id="projects"
            className="py-32 px-6 border-t border-gray-800"
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projets
            </motion.h2>

            <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
              <motion.a
                href="https://explorerop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] p-6 rounded-xl w-full hover:scale-105 transition shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/explorerop.png"
                  alt="ExplorerOP"
                  className="w-full h-56 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">ExplorerOP</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Application Angular qui consomme une API One Piece. Permet
                  d’explorer l’univers du manga à travers une interface moderne
                  et responsive.
                </p>
              </motion.a>
              <motion.div
                className="bg-[#111] p-6 rounded-xl w-full md:w-[500px] hover:scale-105 transition shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/ire-preview.png"
                  alt="IRE - Institut Recherche Environnement"
                  className="w-full h-56 object-cover rounded mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-semibold">IRE (Projet local)</h3>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full">
                    Non publié
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Projet de mise en page HTML/CSS réalisé pour maîtriser les
                  animations, la disposition des éléments et le responsive sans
                  framework. Design immersif avec formulaire, menu sticky,
                  galerie et transitions.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#111] p-6 rounded-xl w-full md:w-[500px] hover:scale-105 transition shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/ngreact-coming-soon.png" // Image générée
                  alt="NGReact Coming Soon"
                  className="w-full h-56 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  NGReact App (Coming Soon)
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Site vitrine de la micro-entreprise <strong>NGReact</strong>{' '}
                  spécialisée dans la création de sites et applications web sur
                  mesure, en Angular & React. Lancement prévu prochainement.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="py-32 px-6 border-t border-gray-800"
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Me Contacter
            </motion.h2>

            <motion.form
              className="max-w-xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message envoyé !');
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm text-gray-300"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Envoyer
              </button>
            </motion.form>
          </section>
          <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
            <div className="max-w-4xl mx-auto px-6">
              <p>
                © {new Date().getFullYear()} Johan Rivet – Tous droits réservés.
              </p>
              <div className="mt-2 flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/johan-rivet-a3955b375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/R-Johan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}
