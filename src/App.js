import './styles/main.scss'
import Header from "./componentes/Header/Header";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './componentes/Footer/Footer';
import Career from './pages/Career/Career';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Header/>
      <div className="app-body">
        <Home/>
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
