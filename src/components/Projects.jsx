import { motion } from 'framer-motion';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            02. PROYECTOS
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-dark-900 mb-4">
            Construyendo soluciones{' '}
            <span className="gradient-text">que importan</span>
          </h2>
          <p className="text-lg text-dark-600 font-light">
            De sistemas empresariales a plataformas SaaS. Cada proyecto con un propósito claro y resultados medibles.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    cyan: 'from-cyan-500 to-cyan-600',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent overflow-hidden card-hover"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-semibold text-gray-500">
                {project.category}
              </span>
              <span className="text-gray-300">•</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                project.status === 'Completado' 
                  ? 'bg-green-100 text-green-700'
                  : project.status === 'Entregado'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-dark-600 font-medium">
              {project.tagline}
            </p>
          </div>

          <div className="flex-shrink-0 ml-4">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all"
                aria-label="Ver repositorio"
              >
                <Github size={18} />
              </a>
            ) : (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-400">
                <AlertCircle size={18} />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-dark-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="flex gap-2 text-sm text-dark-600">
              <span className="text-primary-500 mt-0.5">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono font-medium text-dark-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Note if no repo */}
        {project.note && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
            <AlertCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-800">{project.note}</p>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className={`h-1 bg-gradient-to-r ${colorClasses[project.color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </motion.article>
  );
}
