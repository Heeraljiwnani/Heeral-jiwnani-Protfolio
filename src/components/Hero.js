import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-secondary font-medium tracking-wide mb-4">
                        HELLO, I&apos;M
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                        <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">
                            {portfolioData.personalInfo.name}
                        </span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 font-light">
                        {portfolioData.personalInfo.title}
                    </motion.h2>

                    <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-500 text-lg leading-relaxed">
                        <p>
                            Passionate about building scalable web applications and exploring AI.
                            Crafting seamless digital experiences with modern technologies.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
