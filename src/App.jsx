import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar,MobileMenu, StarsCanvas, Tech, Works } from "./components";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero/> 
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
