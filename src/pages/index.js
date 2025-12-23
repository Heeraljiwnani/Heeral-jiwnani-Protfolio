import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </Layout>
  );
}
