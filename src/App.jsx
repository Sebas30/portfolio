import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
