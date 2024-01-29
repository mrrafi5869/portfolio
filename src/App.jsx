import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import Blog from "./components/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <ToastContainer />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Blog></Blog>
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
