import Landing from './pages/Landing';
import About from './pages/About';
import Skills from './pages/Skills';
import './App.css'
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Landing></Landing>
    <About></About>
    <Skills></Skills>
    <Services/>
    <Qualification/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
