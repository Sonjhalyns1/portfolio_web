import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Routes, Route,Link} from 'react-router-dom';
import Resumepdf from "./components/Resumepdf";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      
      {/* <Routes>
        <Route exact path="/resume" element={<Resumepdf />} />
      </Routes> */}

      
    </div>
  );
}

export default App;
