import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Publications from './components/Publications';
import News from './components/News';
import Teaching from './components/Teaching';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-0 lg:ml-80">
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Teaching />
          <Projects />
          <Publications />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;