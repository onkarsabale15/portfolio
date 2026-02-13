import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Achievements />
                <Projects />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
