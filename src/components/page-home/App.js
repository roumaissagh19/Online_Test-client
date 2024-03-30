import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "../Loginform/Contact";
import Footer from "./Footer";
import Work from "./work";
import Testimonial from "./Testimonial";
 

function App() {
  return (
    <div className="App">
      <Home />
      <About />
       <Work/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
