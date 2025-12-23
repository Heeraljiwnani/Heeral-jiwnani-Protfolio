import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-gray-50 dark:bg-black/40">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Professional Experience & Volunteer Work</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line - hidden on mobile, visible on md+ */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {[...portfolioData.experience, ...portfolioData.volunteer].map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[11px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 md:transform md:-translate-x-1/2 shadow-[0_0_10px_var(--primary)]"></div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary hover:border-l-secondary transition-colors duration-300 group bg-white/50 dark:bg-transparent">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3 border border-primary/20">
                                            {exp.dates}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {exp.role || exp.name} {/* Handle slight discrepancy in Experience vs Volunteer data structure if any, though standardized mostly */}
                                        </h3>
                                        <h4 className="text-lg text-gray-700 dark:text-gray-400 mb-4 font-medium">
                                            {exp.company || exp.organization} | <span className="text-gray-500 italic">{exp.location}</span>
                                        </h4>

                                        {Array.isArray(exp.description) ? (
                                            <ul className={`text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'} list-none`}>
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="relative">
                                                        • {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Empty space for the other side on desktop */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
