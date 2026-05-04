import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { STACK } from '../data/portfolio';

const sections = [
  { key: 'frontend', title: 'Frontend', color: 'from-primary-500 to-primary-600' },
  { key: 'backend', title: 'Backend', color: 'from-cyan-500 to-cyan-600' },
  { key: 'database', title: 'Bases de Datos', color: 'from-primary-600 to-cyan-500' },
  { key: 'devops', title: 'DevOps & Tools', color: 'from-cyan-600 to-primary-500' },
  { key: 'integrations', title: 'Integraciones', color: 'from-primary-500 to-cyan-500' },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-cyan-100 rounded-full text-cyan-700 font-mono text-sm font-semibold mb-4">
            03. STACK TÉCNICO
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-dark-900 mb-4">
            Herramientas que{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="text-lg text-dark-600 font-light">
            Años de experiencia trabajando con las mejores tecnologías para construir productos de calidad.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, sIdx) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: sIdx * 0.1 }}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-transparent hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              {/* Header with gradient */}
              <div className={`p-6 bg-gradient-to-r ${section.color}`}>
                <h3 className="font-display font-bold text-xl text-white">
                  {section.title}
                </h3>
              </div>

              {/* Technologies list */}
              <div className="p-6 space-y-3">
                {STACK[section.key].map((item, i) => {
                  const IconComponent = Icons[item.icon];
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                          <IconComponent size={18} className="text-white" />
                        </div>
                        <span className="font-medium text-dark-800 group-hover:text-primary-600 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                        item.level === 'Avanzado'
                          ? 'bg-green-100 text-green-700'
                          : item.level === 'Intermedio'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
