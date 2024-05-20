import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
 
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
      
    </div>
  );
}

export default App;
