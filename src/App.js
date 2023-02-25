import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context'
import { useContext } from 'react'
import Testimonial from "./Components/Testimonial/Testimonial";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background:darkMode? 'black':' ',color:darkMode? 'white':" "}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Experience/>
      <Testimonial/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;