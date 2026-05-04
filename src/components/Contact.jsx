import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, Download } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-cyan-50 to-white"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300 blob animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300 blob animate-float-slow"></div>

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 font-mono text-sm font-semibold mb-4">
            05. CONTACTO
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-dark-900 mb-4">
            ¿Listo para{' '}
            <span className="gradient-text">trabajar juntos</span>?
          </h2>
          <p className="text-lg text-dark-600 font-light">
            Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. Hablemos sobre tu próximo proyecto.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <motion.a
            href={`mailto:${PROFILE.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 p-8 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Email
                </div>
                <div className="font-semibold text-lg text-dark-900 group-hover:text-primary-600 transition-colors">
                  {PROFILE.email}
                </div>
                <div className="text-sm text-dark-600 mt-1">
                  Respondo en menos de 24 horas
                </div>
              </div>
              <Send size={20} className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>

          <motion.a
            href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Teléfono / WhatsApp
                </div>
                <div className="font-semibold text-lg text-dark-900 group-hover:text-cyan-600 transition-colors">
                  {PROFILE.phone}
                </div>
                <div className="text-sm text-dark-600 mt-1">
                  También disponible en WhatsApp
                </div>
              </div>
              <Send size={20} className="text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border-2 border-gray-200 hover:border-dark-900 hover:bg-dark-900 transition-all duration-300"
          >
            <Github size={20} className="text-dark-900 group-hover:text-white transition-colors" />
            <span className="font-semibold text-dark-900 group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border-2 border-gray-200 hover:border-primary-600 hover:bg-primary-600 transition-all duration-300"
          >
            <Linkedin size={20} className="text-primary-600 group-hover:text-white transition-colors" />
            <span className="font-semibold text-primary-600 group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-gray-300"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <div>
                <div className="font-display font-semibold text-dark-900">
                  Sebastian Alvarez
                </div>
                <div className="text-sm text-gray-600">
                  Fullstack Developer
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="text-sm text-gray-600">
                © {year} Sebastian Alvarez Barona
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
