import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
                        <a
                            href={`mailto:${portfolioData.personalInfo.email}`}
                            className="glass-card px-8 py-4 rounded-full text-lg font-semibold hover:border-primary transition-all hover:scale-105 flex items-center gap-3 bg-white/50 dark:bg-transparent"
                        >
                            📧 {portfolioData.personalInfo.email}
                        </a>
                        {portfolioData.personalInfo.phone && (
                            <a
                                href={`tel:${portfolioData.personalInfo.phone}`}
                                className="glass-card px-8 py-4 rounded-full text-lg font-semibold hover:border-secondary transition-all hover:scale-105 flex items-center gap-3 bg-white/50 dark:bg-transparent"
                            >
                                📱 {portfolioData.personalInfo.phone}
                            </a>
                        )}
                    </div>

                    <div className="flex justify-center gap-8">
                        {Object.entries(portfolioData.personalInfo.socials).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white capitalize transition-colors text-xl"
                            >
                                {platform}
                            </a>
                        ))}
                    </div>

                    <footer className="mt-20 text-gray-600 text-sm">
                        <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10 pointer-events-none" />
        </section>
    );
};

export default Contact;
