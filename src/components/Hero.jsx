import { motion } from 'framer-motion';
import { Code2, Rocket, MapPin, Download } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-400 blob animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-400 blob animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-300 to-cyan-300 blob"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="relative section-container">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 mb-6"
          >
            <MapPin size={16} className="text-primary-600" />
            <span className="text-sm font-medium text-dark-700">{PROFILE.location}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-600">{PROFILE.available ? 'Disponible para proyectos' : 'No disponible'}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-dark-900 mb-6"
          >
            Hola, soy{' '}
            <span className="gradient-text block mt-2">
              Sebastian Alvarez
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-dark-600 max-w-2xl mb-4 font-light"
          >
            {PROFILE.bio}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {['React', 'Angular', 'Vue', 'Laravel', 'Python', 'FastAPI', 'Docker'].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-dark-700 border border-primary-200"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
            >
              <Rocket size={20} />
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-dark-800 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-400 hover:bg-white transition-all duration-300"
            >
              <Code2 size={20} />
              Trabajemos juntos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mt-16 pt-8 border-t border-gray-200"
          >
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">
                5+
              </div>
              <div className="text-sm text-dark-600">Años de experiencia</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">
                8+
              </div>
              <div className="text-sm text-dark-600">Proyectos completados</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">
                30%
              </div>
              <div className="text-sm text-dark-600">Reducción en tiempos</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-dark-400">
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-primary-400 to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
