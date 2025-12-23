import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { portfolioData } from '../data/portfolio';

export default function About() {
    return (
        <Layout>
            <section className="section-padding pt-32 min-h-screen">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                            About <span className="text-gradient">Me</span>
                        </h1>

                        <div className="glass-card p-8 md:p-12 rounded-3xl mb-12">
                            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 leading-relaxed mb-6">
                                Hello! I&apos;m <span className="text-primary font-semibold">{portfolioData.personalInfo.name}</span>, a passionate
                                Software Engineer based in {portfolioData.personalInfo.location}.
                                I&apos;m currently pursuing my B.Tech in CSE at VIT Bhopal with a strong academic record (CGPA: {portfolioData.education[0].gpa}).
                            </p>
                            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 leading-relaxed mb-6">
                                My journey in tech is driven by a curiosity to solve real-world problems using code.
                                I specialize in <strong>Full Stack Development</strong> and have a keen interest in <strong>Artificial Intelligence</strong>.
                                I love building intuitive, high-performance applications that provide value to users.
                            </p>
                            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 leading-relaxed">
                                When I&apos;m not coding, I&apos;m actively involved in tech communities like Mozilla Firefox VIT, organizing events and workshops.
                                I believe in continuous learning and adapting to new technologies to stay ahead in this ever-evolving field.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-card p-8 rounded-3xl">
                                <h2 className="text-2xl font-bold mb-6 text-secondary">🚀 What I Do</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl mt-1">💻</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Web Development</h3>
                                            <p className="text-gray-500 text-sm">Building responsive PWA & SPA using React, Next.js, and Modern CSS.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl mt-1">🤖</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">AI & Machine Learning</h3>
                                            <p className="text-gray-500 text-sm">Developing predictive models and integrating AI features into web apps.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl mt-1">⚡</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Backend Engineering</h3>
                                            <p className="text-gray-500 text-sm">Creating robust APIs with FastAPI, Node.js, and Supabase.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card p-8 rounded-3xl">
                                <h2 className="text-2xl font-bold mb-6 text-accent">🌱 Fun Facts</h2>
                                <ul className="space-y-3 text-gray-500 dark:text-gray-300">

                                    <li>🌍 Bilingual (English & Hindi)</li>
                                    <li>🎨 Love designing UI mockups before coding</li>
                                    <li>☕ Powered by coffee and curiosity</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
