import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Education = () => {
    return (
        <section id="education" className="section-padding relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Educational <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">My academic qualifications</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl">🎓</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.school}</h3>
                            <p className="text-secondary font-medium mb-4">{edu.degree}</p>

                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span>📍</span>
                                    <span>{edu.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🗓️</span>
                                    <span>{edu.dates}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Score</span>
                                <p className="text-2xl font-bold text-gradient mt-1">{edu.gpa}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
