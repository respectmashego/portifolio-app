import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portifolio from "./components/Portifolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="App">
     <NavBar/> 
     <Home/>
     <About/>
     <Portifolio/>
     <Experience/>
     <Contact/>

      <SocialLinks/> 
    </div>
  );
}

export default App;
