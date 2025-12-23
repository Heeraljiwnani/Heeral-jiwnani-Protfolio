import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Innovating with Code & AI</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 border border-black/5 dark:border-white/5 flex flex-col group bg-white dark:bg-transparent"
                        >
                            {/* Placeholder for project image or abstract gradient header */}
                            <div className={`h-48 w-full bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-900/50 to-indigo-900/50' : 'from-blue-900/50 to-cyan-900/50'} relative p-6 flex flex-col justify-end group`}>
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors ${project.image ? 'z-0' : ''}`}></div>
                                <h3 className="text-3xl font-bold text-white relative z-10">{project.name}</h3>
                                <p className="text-white/80 relative z-10 font-light">{project.subtitle}</p>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-3 mb-8 flex-grow">
                                    {project.description.slice(0, 3).map((desc, i) => (
                                        <p key={i} className="text-gray-600 dark:text-gray-400 text-sm flex gap-2">
                                            <span className="text-secondary mt-1">▹</span>
                                            {desc}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        GitHub
                                    </a>
                                    {(project.links.demo && project.links.demo !== "#") && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
