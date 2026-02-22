import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Full Stack Job Portal',
    description: 'A comprehensive job portal with candidate matching, company profiles, and application tracking. Features advanced search and real-time notifications.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume screening tool that extracts keywords, scores applicants, and provides actionable insights for recruiters.',
    tags: ['React', 'Python', 'AI/ML', 'FastAPI'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Research Paper Management',
    description: 'Academic platform for organizing, annotating, and collaborating on research papers with citation management and PDF tools.',
    tags: ['React', 'Firebase', 'PDF.js', 'Tailwind'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Admin Dashboard UI System',
    description: 'Reusable component library and admin dashboard template with charts, tables, forms, and dark mode support.',
    tags: ['React', 'Tailwind', 'Recharts', 'Framer Motion'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'E-Commerce Frontend',
    description: 'Modern e-commerce frontend with product filtering, cart management, and checkout flow. Fully responsive with PWA support.',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'Headless CMS for portfolio websites with drag-drop sections, theme customization, and deployment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    live: '#',
    github: 'https://github.com',
  },
];

const filters = ['All', 'React', 'Full Stack'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            A selection of my best work showcasing responsive design and modern tech stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'glass text-white/80 hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-3xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-lg bg-white/10 text-xs text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl glass text-center text-sm font-medium hover:bg-white/20 transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
