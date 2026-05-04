import { motion } from 'framer-motion';
import { Briefcase, Award, Zap, Trophy, Star } from 'lucide-react';
import { EXPERIENCE, ACHIEVEMENTS } from '../data/portfolio';

const achievementIcons = {
  Zap,
  Trophy,
  Star,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full text-primary-700 font-mono text-sm font-semibold mb-4">
            04. EXPERIENCIA
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-dark-900 mb-4">
            Trayectoria{' '}
            <span className="gradient-text">profesional</span>
          </h2>
          <p className="text-lg text-dark-600 font-light">
            Más de 5 años construyendo software para empresas y startups en Medellín.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-cyan-500 to-primary-500"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-full ring-4 ring-white"></div>

                {/* Content */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 md:p-8 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                  {/* Period badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full mb-4">
                    <Briefcase size={14} className="text-primary-600" />
                    <span className="font-mono text-xs font-semibold text-primary-700">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & company */}
                  <h3 className="font-display font-bold text-2xl text-dark-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-4">
                    <span>{exp.company}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-dark-600 font-normal">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-dark-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-dark-700 mb-2">Logros destacados:</div>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="flex gap-2 text-sm text-dark-600">
                            <span className="text-cyan-500 mt-0.5">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono font-medium text-dark-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="font-display font-bold text-3xl text-dark-900 mb-8 flex items-center gap-3">
            <Award className="text-primary-600" size={32} />
            Logros destacados
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((achievement, i) => {
              const IconComponent = achievementIcons[achievement.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-primary-50 to-cyan-50 rounded-2xl border-2 border-primary-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-dark-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-dark-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
