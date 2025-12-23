import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-black/5 dark:bg-white/5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Tools & Technologies I work with</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 capitalize text-secondary border-b border-black/10 dark:border-white/10 pb-2">
                                {category.replace('_', ' & ')}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-black/40 rounded-lg text-gray-800 dark:text-gray-300 border border-black/5 dark:border-white/5 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education Highlight within Skills or separate? Keeping it subtle here as a credential */}
                {/* Education moved to separate section */}
            </div>
        </section>
    );
};

export default Skills;
